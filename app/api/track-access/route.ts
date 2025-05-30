import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import db from "@/app/src/components/lib/db";

// Configuração do e-mail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER as string,
    pass: process.env.EMAIL_PASS as string,
  },
});

function getClientIP(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : req.ip || "unknown";
}

// Função para gerar timestamp do Brasil
function getBrazilTimestamp(): string {
  const now = new Date();

  // Usar o timezone oficial do Brasil
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);

  // Montar no formato YYYY-MM-DD HH:mm:ss
  const year = parts.find((p) => p.type === "year")?.value;
  const month = parts.find((p) => p.type === "month")?.value;
  const day = parts.find((p) => p.type === "day")?.value;
  const hour = parts.find((p) => p.type === "hour")?.value;
  const minute = parts.find((p) => p.type === "minute")?.value;
  const second = parts.find((p) => p.type === "second")?.value;

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIP(req);
    const brazilTimestamp = getBrazilTimestamp();

    // Headers ou corpo da requisição podem fornecer mais dados
    const headers = req.headers;

    const country = headers.get("x-vercel-ip-country") || "unknown";
    const city = headers.get("x-vercel-ip-city") || "unknown";
    const device = headers.get("user-agent") || "unknown";
    const url = headers.get("referer") || "unknown";
    const referrer = headers.get("referer") || "unknown";
    const screenResolution = headers.get("x-screen-resolution") || "unknown";
    const language = headers.get("accept-language") || "unknown";
    const timezone =
      Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown";

    console.log("Inserindo com timestamp do Brasil:", brazilTimestamp);

    // Inserir no banco com timestamp brasileiro
    db.prepare(
      `
      INSERT INTO access_logs 
      (ip, country, city, device, url, referrer, screenResolution, language, timezone, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `
    ).run(
      ip,
      country,
      city,
      device,
      url,
      referrer,
      screenResolution,
      language,
      timezone,
      brazilTimestamp // Passa o timestamp brasileiro explicitamente
    );

    // Pegar total de acessos
    const totalAccesses = db
      .prepare("SELECT COUNT(*) AS count FROM access_logs")
      .get().count;

    // Pegar últimos 5 acessos
    const lastAccesses = db
      .prepare(
        `
        SELECT ip, country, city, created_at 
        FROM access_logs 
        ORDER BY id DESC 
        LIMIT 5
      `
      )
      .all();

    // Enviar e-mail se configurado
    if (
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASS &&
      process.env.NOTIFICATION_EMAIL
    ) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.NOTIFICATION_EMAIL,
        subject: `🚀 Novo acesso ao seu site - Total: ${totalAccesses}`,
        html: `
          <h2>Novo acesso detectado!</h2>
          <p><strong>Total de acessos:</strong> ${totalAccesses}</p>
          <p><strong>IP:</strong> ${ip}</p>
          <p><strong>Regiao:</strong> ${timezone}</p>
          <p><strong>Dispositivo:</strong> ${device}</p>
          <p><strong>Horário (Brasil):</strong> ${brazilTimestamp}</p>
          <h3>Últimos 5 acessos:</h3>
          <ul>
            ${lastAccesses
              .map(
                (a) =>
                  `<li>${a.created_at} - ${a.timestamp}, (IP: ${a.ip})</li>`
              )
              .join("")}
          </ul>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error("Erro ao enviar e-mail:", emailError);
      }
    }

    return NextResponse.json({
      success: true,
      totalAccesses,
      timestamp: brazilTimestamp,
      message: "Acesso registrado com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao processar acesso:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

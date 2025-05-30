// Garante que o código rode no ambiente Node.js
export const runtime = "nodejs";

import db from "@/app/src/components/lib/db";
import { NextResponse } from "next/server";

// Tipagem dos dados retornados do banco
interface CountResult {
  count: number;
}

interface HourlyResult {
  hour: string;
  count: number;
}

interface AccessLogEntry {
  id: number;
  date: string;
  ip: string;
  country: string | null;
  city: string | null;
  device: string;
  url: string;
  referrer: string;
  screenResolution: string;
  language: string;
  timezone: string;
}

export async function GET() {
  try {
    // Total de acessos
    const totalAccesses = (db
      .prepare("SELECT COUNT(*) as count FROM access_logs")
      .get() as CountResult).count;

    // Visitantes únicos (baseado no IP)
    const uniqueVisitors = (db
      .prepare("SELECT COUNT(DISTINCT ip) as count FROM access_logs")
      .get() as CountResult).count;

    // Acessos feitos hoje
    const todayAccesses = (db
      .prepare(
        `
        SELECT COUNT(*) as count 
        FROM access_logs 
        WHERE date(created_at) = date('now', 'localtime')
      `
      )
      .get() as CountResult).count;

    // Acessos por hora (nas últimas 24h agrupados por hora)
    const hourlyData = db
      .prepare(
        `
        SELECT 
          strftime('%H', created_at) as hour,
          COUNT(*) as count
        FROM access_logs
        WHERE date(created_at) = date('now', 'localtime')
        GROUP BY hour
        ORDER BY hour
      `
      )
      .all() as HourlyResult[];

    const accessByHour = hourlyData.reduce((acc, { hour, count }) => {
      acc[parseInt(hour, 10)] = count;
      return acc;
    }, {} as Record<number, number>);

    // Últimos 100 acessos
    const lastAccesses = db
      .prepare(
        `
        SELECT 
          id,
          ip,
          country,
          city,
          device,
          url,
          referrer,
          screenResolution,
          language,
          timezone,
          created_at
        FROM access_logs
        ORDER BY created_at DESC
        LIMIT 100
      `
      )
      .all() as AccessLogEntry[];

    return NextResponse.json({
      success: true,
      data: {
        totalAccesses,
        uniqueVisitors,
        todayAccesses,
        accessByHour,
        lastAccesses,
      },
    });
  } catch (error) {
    console.error("Stats error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to get access statistics",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

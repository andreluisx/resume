// src/utils/timezone.ts
export function getBrazilTimestamp(): string {
  const now = new Date();
  
  // Usar o timezone oficial do Brasil (considera horário de verão automaticamente)
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  
  const parts = formatter.formatToParts(now);
  
  // Montar no formato YYYY-MM-DD HH:mm:ss
  const year = parts.find(p => p.type === 'year')?.value;
  const month = parts.find(p => p.type === 'month')?.value;
  const day = parts.find(p => p.type === 'day')?.value;
  const hour = parts.find(p => p.type === 'hour')?.value;
  const minute = parts.find(p => p.type === 'minute')?.value;
  const second = parts.find(p => p.type === 'second')?.value;
  
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

// Alternativa mais simples (mas pode ter pequenas diferenças de precisão)
export function getBrazilTimestampSimple(): string {
  const now = new Date();
  
  // Converter para timestamp do Brasil
  const brazilTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
  
  // Formato YYYY-MM-DD HH:mm:ss
  const year = brazilTime.getFullYear();
  const month = String(brazilTime.getMonth() + 1).padStart(2, '0');
  const day = String(brazilTime.getDate()).padStart(2, '0');
  const hour = String(brazilTime.getHours()).padStart(2, '0');
  const minute = String(brazilTime.getMinutes()).padStart(2, '0');
  const second = String(brazilTime.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
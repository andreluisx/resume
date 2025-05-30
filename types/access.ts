
// types/access.ts
export interface AccessRecord {
  ip: string;
  userAgent: string;
  date: string;
}

export interface AccessData {
  totalAccesses: number;
  uniqueVisitors: number;
  todayAccesses: number;
  dailyChange: number;
  accessByHour: Record<number, number>;
  lastAccesses: Array<{
    date: string;
    ip: string;
    country?: string;
    city?: string;
    device?: string;
    devType?: string;
  }>;
}
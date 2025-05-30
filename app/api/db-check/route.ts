import db from "@/app/src/components/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tables = db
      .prepare(
        `
      SELECT name FROM sqlite_master 
      WHERE type='table'
    `
      )
      .all();

    const accessLogsInfo = tables.some((t) => t.name === "access_logs")
      ? db.prepare("PRAGMA table_info(access_logs)").all()
      : [];

    const recordCount = tables.some((t) => t.name === "access_logs")
      ? db.prepare("SELECT COUNT(*) as count FROM access_logs").get().count
      : 0;

    return NextResponse.json({
      success: true,
      data: {
        tables,
        accessLogsInfo,
        recordCount,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Database check failed" },
      { status: 500 }
    );
  }
}

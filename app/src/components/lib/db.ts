// src/components/lib/db.ts
import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const dbFile = path.resolve(process.cwd(), 'data.sqlite');

// Criar o banco se não existir
if (!fs.existsSync(dbFile)) {
  fs.writeFileSync(dbFile, '');
}

const db = new Database(dbFile);

// Criar a tabela se não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS access_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT,
    country TEXT,
    city TEXT,
    device TEXT,
    url TEXT,
    referrer TEXT,
    screenResolution TEXT,
    language TEXT,
    timezone TEXT,
    created_at DATETIME
  )
`);

export default db;

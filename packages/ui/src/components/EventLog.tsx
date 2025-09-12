"use client";
import { FC, useState } from "react";

type Log = { level: "INFO" | "WARN" | "ERROR"; message: string; time: string };

export const EventLog: FC = () => {
  const [logs] = useState<Log[]>([]);
  return (
    <div className="border p-2 h-full overflow-y-auto text-sm">
      {logs.length === 0 && <p className="text-gray-500">Лог пуст</p>}
      {logs.map((l, i) => (
        <div key={i} className="border-b py-1">
          <span className="font-mono text-xs mr-2">{l.time}</span>
          <span className="font-bold mr-2">{l.level}</span>
          <span>{l.message}</span>
        </div>
      ))}
    </div>
  );
};

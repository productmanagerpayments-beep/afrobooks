"use client";
import { useState } from "react";
import {
  PaymentMethodTile,
  PaymentModal,
  EventLog,
  FlowRoadmap,
} from "@backpay/ui";

const methods = [
  { id: "orange", label: "Orange" },
  { id: "moov", label: "Moov" },
  { id: "visa", label: "Visa" },
  { id: "mastercard", label: "MasterCard" },
  { id: "airtm", label: "AIRTM" },
  { id: "binance", label: "BinancePay" },
  { id: "moneygo", label: "MoneyGo USD" },
];

export default function HomePage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="grid grid-cols-3 gap-4 p-4">
      <section className="col-span-2 grid grid-cols-3 gap-2">
        {methods.map((m) => (
          <PaymentMethodTile
            key={m.id}
            label={m.label}
            onSelect={() => setSelected(m.id)}
          />
        ))}
        {selected && (
          <PaymentModal method={selected} onClose={() => setSelected(null)} />
        )}
      </section>
      <aside className="col-span-1">
        <EventLog />
      </aside>
      <div className="col-span-3 mt-4">
        <FlowRoadmap />
      </div>
    </main>
  );
}

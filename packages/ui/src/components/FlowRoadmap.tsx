"use client";
import { FC } from "react";

const steps = [
  "UI",
  "Validation",
  "Tokenization",
  "Risk/KYC",
  "3DS",
  "Authorization",
  "Capture",
  "Webhook",
  "Receipt",
];

export const FlowRoadmap: FC = () => (
  <ol className="flex flex-wrap gap-2 text-sm">
    {steps.map((s, i) => (
      <li key={s} className="flex items-center">
        <span className="px-2 py-1 rounded bg-gray-200">
          {i + 1}. {s}
        </span>
        {i < steps.length - 1 && <span className="mx-1">→</span>}
      </li>
    ))}
  </ol>
);

"use client";
import { FC } from "react";

interface Props {
  label: string;
  onSelect: () => void;
}

const PaymentMethodTile: FC<Props> = ({ label, onSelect }) => (
  <button
    onClick={onSelect}
    className="border rounded p-4 text-center hover:bg-blue-50"
  >
    {label}
  </button>
);

export default PaymentMethodTile;

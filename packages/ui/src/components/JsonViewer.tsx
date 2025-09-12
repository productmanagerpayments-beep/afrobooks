"use client";
import { FC } from "react";

interface Props {
  data: unknown;
}

export const JsonViewer: FC<Props> = ({ data }) => (
  <pre className="bg-gray-900 text-green-200 p-2 rounded text-xs overflow-x-auto">
    {JSON.stringify(data, null, 2)}
  </pre>
);

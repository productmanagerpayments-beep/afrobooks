import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();
  res.status(200).json({
    acsURL: "https://acs.example.com",
    creq: "creq-data",
    threeDSVersion: "2.2.0",
    frictionless: true,
  });
}

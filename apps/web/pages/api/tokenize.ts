import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();
  res.status(200).json({
    token: "tok_123",
    bin: "411111",
    brand: "VISA",
    issuerCountry: "US",
    riskScore: 10,
  });
}

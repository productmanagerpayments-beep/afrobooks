import "../styles/globals.css";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

export const metadata = {
  title: "BackPay",
  description: "Demo payment pages",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-gray-100 text-gray-900">
        <NextIntlClientProvider locale="ru">{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

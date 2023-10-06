import "../styles/main.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sweeppeople -- munich / wor",
  description: "site under construction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

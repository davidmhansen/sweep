import "../styles/main.scss";
import type { Metadata } from "next";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

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
      <body>
        <Navigation></Navigation>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

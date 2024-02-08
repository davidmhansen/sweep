import "../styles/main.scss";

import Head from "next/head";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import Cursor from "./components/StickyCursor/StickyCursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <SmoothScroll>
          <Header></Header>
          {children}
          <Footer></Footer>
          {/* <Cursor></Cursor> */}
        </SmoothScroll>
      </body>
    </html>
  );
}

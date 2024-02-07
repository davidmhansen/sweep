import "../styles/main.scss";

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

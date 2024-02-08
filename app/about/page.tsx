import Header from "../components/Hero/Hero";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sweeppeople -- about us",
  description: "site under construction",
};

export default function Service() {
  return (
    <div className="about">
      <Header title="About us" />
      <p className="about__copy">
        We’re a german studio that builds transformative identities, brands and
        events to bring your ideas to life.
      </p>
      <div className="about__img-wrapper">
        <Image
          src="/images/about-us.jpg"
          width={0}
          height={0}
          sizes="100vw"
          alt="Picture of the author"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

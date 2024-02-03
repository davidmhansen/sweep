import Header from "../components/Header/Header";
import Image from "next/image";

export default function Service() {
  return (
    <div className="about">
      <Header title="About us" />
      <p className="about__copy">
        We are a bunch of friends with many ideas, creative mindsets and the
        goal to bring your ideas to life.
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

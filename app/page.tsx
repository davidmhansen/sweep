import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sweeppeople -- homepage",
  description: "site under construction",
};

export default function Home() {
  return (
    <div className="homepage">
      <header>
        <h1 className="homepage__title">
          Human Stories.<br></br>Superhuman brands.
        </h1>
        <p className="homepage__subtitle">
          We are a creative agency, specialising in brand appearance, event
          management and other cool stuff based near munich.
        </p>
        <div className="homepage__image-wrapper">
          <Image
            src="/images/compressed-header-green.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="Picture of the author"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </header>
      <section className="homepage__section--1">
        <div className="homepage__section-wrapper">
          <div className="homepage__section">
            <h2 className="homepage__section-title">
              We are a digital branding agency and we do what we love with
              passion.
            </h2>
            <p className="homepage__section-copy">
              We are convinced that things will only be good if you love what
              you do. Passion is the key - expertise is the way. With a track
              record of successfully executing a myriad of digital, virtual,
              hybrid and live projects, we have built strong relationships with
              renowned customer and a unique network with like-minded people.
            </p>
          </div>
          <div className="homepage__content">
            <h3 className="homepage__content-title">What we offer</h3>
            <p className="homepage__content-copy">
              At sweeppeople, we excel at transforming a product or brand's
              message into an immersive experience that sparks inspiration and
              cultivates genuine, long-lasting connections with customers. Armed
              with a deep understanding of youthful demographics and a rich
              background in cultural events, we craft innovative concepts that
              leave a lasting impression on our clients and convert target
              audiences into devoted enthusiasts.
            </p>
          </div>
        </div>
        <div className="homepage__section-image--wrapper">
          <Image
            src="/images/stage.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="Picture of the author"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>
      <section className="homepage__section--2">
        <div className="homepage__section-wrapper">
          <h2 className="homepage__section-title">
            It's important to us to always pay attention to the detail.
          </h2>
          <div className="homepage__section-content">
            <span className="content__title">Hollistic approach</span>
            <div className="copy__wrapper">
              <h3 className="subtitle">
                Transforming brands into dynamic experiences
              </h3>
              <p className="copy">
                Comprising a team of seasoned professionals skilled in
                communication, event and media production, marketing, interior
                design, project management and certified steel/wood construction
                skills, we adopt a holistic approach that takes care of every
                detail from the initial brainstorming to seamless execution. Our
                extensive network of partners further ensures we have a solution
                for nearly every challenge and can provide comprehensive support
                across various domains. Our primary focus is on delivering
                enduring, sustainable solutions rather than fleeting fixes that
                make a big splash.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="homepage__image--align-left">
          <Image
            src="/images/compressed.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="Picture of the author"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="section-3--wrapper">
          <h2 className="section-3__title">
            It's our goal to deliver the ideal solution for you. <br></br>In the
            end, it's all about the smile.
          </h2>
          <p className="section-3__copy">
            By orchestrating unique and unforgettable experiences, we ensure
            that your concerns become a true work of art. We're not just in the
            agency business, we're in the business of making people smile.
            <br />
            Whether through a project, an event, produced content for your
            brand, a meeting with us, a website, sound / light / visual concepts
            or installations, a designed product or something else we have
            created. In the end, it's people's smiles that drive us.
          </p>
        </div>
      </section>
      <section>
        <div className="homepage__cta--bottom">
          <Image
            src="/images/our-works-cta.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="Picture of the author"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="homepage__cta-wrapper">
            <span className="homepage__cta-copy">OUR WORKS</span>
            <span className="homepage__cta-info">coming soon</span>
          </div>
        </div>
      </section>
    </div>
  );
}

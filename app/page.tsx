import Image from "next/image";

export default function Home() {
  return (
    <div className="homepage">
      <header>
        <h1 className="homepage__title">
          Human Stories.<br></br>Superhuman events.
        </h1>
        <p className="homepage__subtitle">
          We are an audio / visual creative agency, specialising in brand
          appearance, event management and other cool stuff based near munich.
        </p>
        <div className="homepage__image-wrapper">
          <Image
            src="/images/homepage-header.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="Picture of the author"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </header>
      <section>
        <div>
          <h2>We do what we love</h2>
          <p>
            We are convinced that things will only be good if you love what you
            do. Passion is the key - expertise is the way. With a track record
            of successfully executing a myriad of digital, virtual, hybrid and
            live projects, we have built strong relationships with renowned
            customer and a unique network with like-minded people.
          </p>
          <div>
            <h3>What we offer</h3>
            <p>
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
        <div>
          <img
            src="../public/images/stage.jpg"
            alt="stage concept at back 2 the woods 2023"
          />
        </div>
      </section>
      <section>
        <div>
          <h2>We always pay attention to the detail.</h2>
          <div>
            <span>Hollistic approach</span>
            <div>
              <h3>Transforming brands into dynamic experiences</h3>
              <p>
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
        <div>
          <img src="../public/images/homepage-hollistic-approach.jpg" alt="" />
        </div>
        <div>
          <h2>In the end, it´s the smile.</h2>
          <p>
            By orchestrating unique and unforgettable experiences, we ensure
            that your concerns become a true work of art. We’re not just in the
            agency business, we’re in the business of making people smile.
            Whether through a project, an event, produced content for your
            brand, a meeting with us, a website, sound / light / visual concepts
            or installations, a designed product or something else we have
            created. In the end, it's people's smiles that drive us.
          </p>
        </div>
      </section>
      <section>
        <div>
          <img src="../public/images/our-works-cta.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}

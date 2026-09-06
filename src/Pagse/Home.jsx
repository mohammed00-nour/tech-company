import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
    <Helmet>
        <title>Tech Company | Innovative Technology Solutions</title>

        <meta
          name="description"
          content="Tech Company provides modern technology and digital solutions to help businesses grow and succeed."
        />

        <link
          rel="canonical"
          href="https://mohammed00-nour.github.io/tech-company/"
        />
        <meta property="og:title" content="Tech Company | Innovative Technology Solutions" />

        <meta
          property="og:description"
          content="Tech Company provides modern technology and digital solutions to help businesses grow and succeed."
        />

        <meta
          property="og:url"
          content="https://mohammed00-nour.github.io/tech-company/"
        />

        <meta property="og:type" content="website" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Tech Company",
          url: "https://mohammed00-nour.github.io/tech-company/",
          description:
            "Tech Company provides modern technology and digital solutions to help businesses grow and succeed.",
        })}
      </script>
    </Helmet>
    <main>
      <section>
        <h1>Innovative Technology Solutions</h1>

        <p>
          We help businesses grow through modern technology and digital
          solutions.
        </p>

        <button>Explore Our Services</button>
      </section>

      <section>
        <h2>Why Choose Us?</h2>

        <p>
          We provide modern, reliable, and high-quality technology solutions
          for businesses.
        </p>
      </section>
    </main>
  </>
  );
}

export default Home;
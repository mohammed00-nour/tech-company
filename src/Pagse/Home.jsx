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
          href="https://YOUR-DOMAIN.com/"
        />
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
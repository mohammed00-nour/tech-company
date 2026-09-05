import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Tech Company</title>

        <meta
          name="description"
          content="Explore Tech Company's web development, mobile application, and digital solutions designed to help businesses grow."
        />

        <link
          rel="canonical"
          href="https://mohammed00-nour.github.io/tech-company/services"
        />
      </Helmet>

      <main>
        <section>
          <h1>Our Services</h1>

          <p>
            We provide modern technology solutions to help businesses grow and
            succeed.
          </p>
        </section>

        <section>
          <h2>Web Development</h2>
          <p>
            We build modern, fast, and responsive websites for businesses.
          </p>

          <h2>Mobile Applications</h2>
          <p>
            We create user-friendly mobile applications for modern businesses.
          </p>

          <h2>Digital Solutions</h2>
          <p>
            We provide digital solutions that help businesses improve and grow.
          </p>
        </section>
      </main>
    </>
  );
}

export default Services;
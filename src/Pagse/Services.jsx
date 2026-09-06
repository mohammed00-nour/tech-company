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
        <meta property="og:title" content="Our Services | Tech Company" />

        <meta
          property="og:description"
          content="Explore Tech Company's web development, mobile application, and digital solutions designed to help businesses grow."
        />

        <meta
          property="og:url"
          content="https://mohammed00-nour.github.io/tech-company/services"
        />

        <meta property="og:type" content="website" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Tech Company Services",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Web Development",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Mobile Applications",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Digital Solutions",
            },
          ],
        })}
      </script>
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
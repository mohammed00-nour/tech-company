import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Tech Company</title>

        <meta
          name="description"
          content="Learn more about Tech Company, our mission, and our vision for providing innovative technology solutions for businesses."
        />

        <link
          rel="canonical"
          href="https://mohammed00-nour.github.io/tech-company/about"
        />
      </Helmet>

      <main>
        <section>
          <h1>About Tech Company</h1>

          <p>
            Tech Company is a modern technology company dedicated to providing
            innovative digital solutions for businesses.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>

          <p>
            Our mission is to help businesses grow by using modern technology,
            creative ideas, and reliable digital solutions.
          </p>
        </section>

        <section>
          <h2>Our Vision</h2>

          <p>
            Our vision is to become a trusted technology partner for businesses
            looking to grow in the digital world.
          </p>
        </section>
      </main>
    </>
  );
}

export default About;
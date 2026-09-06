import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Tech Company</title>

        <meta
          name="description"
          content="Contact Tech Company to discuss your project and learn more about our web development, mobile application, and digital solutions."
        />

        <link
          rel="canonical"
          href="https://mohammed00-nour.github.io/tech-company/contact"
        />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Tech Company",
          description:
            "Contact Tech Company to discuss your project and learn more about our web development, mobile application, and digital solutions.",
          url: "https://mohammed00-nour.github.io/tech-company/contact",
        })}
      </script>
      </Helmet>

      <main>
        <section>
          <h1>Contact Us</h1>

          <p>
            Get in touch with us to discuss your project or learn more about
            our services.
          </p>
        </section>

        <section>
          <h2>Get In Touch</h2>

          <p>Email: info@techcompany.com</p>
          <p>Phone: +49 123 456 789</p>
          <p>Location: Frankfurt, Germany</p>
        </section>

        <section>
          <h2>Send Us a Message</h2>

          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Contact;
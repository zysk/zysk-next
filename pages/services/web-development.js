import Head from "next/head";

const WebDevelopment = () => {
  return (
    <>
      <Head>
        <title>
          Web Design and Web Development Startup in Bangalore| Zysk Technologies
        </title>
        <meta
          name="description"
          content="Zysk Technologies develops responsive and attractive websites and offers services
                    like Web Designing, Website Optimization, Web Hosting, Google Analytics and SEO."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container-fluid py-16 mx-auto">
        <div className="service flex justify-around flex-wrap">
          <div className="mb-4">
            <picture>
              <img
                className=" illustration"
                src="/img/services/website-development.svg"
                alt="Website development illustration"
              />
            </picture>
          </div>

          <div className="w-full block lg:hidden"></div>

          <div className="description">
            <h1 className="header">Services</h1>
            <h2 className="title my-6">Websites</h2>
            <p className="highlight mb-4">
              Making a good website isn’t that hard, but is that enough to give
              you the turnover that you dream of?
            </p>
            <p className="mb-4">
              A business today needs an extraordinary website that represents
              its brand in the best way to attract potential clients and boost
              its visibility. We aim for perfection in each and every element
              while building a compelling product that will speak to your
              customers and stand out in the market.{" "}
            </p>
            <p className="mb-4">
              Our websites are scalable, aesthetically pleasing, seamless in
              their functions and completely secure.
            </p>
            <p className="highlight red mb-4">
              It takes about 1/10th of a second to form a first impression of a
              person. Websites are no different. The first 50 milliseconds
              determine whether they’ll stay or leave your site.
            </p>

            <p className="mb-4">
              Taking your business online gives you a representation to a larger
              crowd - 4.7 billion online users to be precise.
              <br />
              Our team of Creative Designers and Developers understand the
              demographics of your customers and create tailor-made experiences
              that both your customers and Google bots love.
            </p>
          </div>

          <div className="description">
            <p className="highlight mb-4">
              52% of all website traffic worldwide is generated through mobile
              phones so all our web solutions are mobile-enabled and mobile
              responsive.
            </p>

            <p className="mb-4">
              We also offer maintenance and are involved in keeping your website
              fresh and up-to-date after its launch. Why?
            </p>
            <p className="mb-4">
              Customers respond to websites that are in touch with the latest
              trends and have distinctive features. Along with Website Designing
              & Development, Website optimization, Website Hosting, Google
              Analytics & Social Media setup, Business Emails setup and Search
              Engine Optimization we create an all-round solution to set the
              ball rolling for your business.
            </p>

            <p className="highlight red mb-4">
              We look forward to developing the ground-breaking website that
              will stand out from your competition and win the online race!
            </p>

            <div className="flex justify-between items-center flex-wrap mt-10 ">
              <picture>
                <img
                  src="/img/services/bootstrap.png"
                  className="w-20 h-15"
                  alt="Bootstrap logo"
                  title="Bootstrap"
                />
              </picture>

              <picture>
                <img
                  src="/img/services/wordpress-logo.svg"
                  alt="WordPress logo"
                  title="WordPress"
                />
              </picture>
              <picture>
                <img
                  src="/img/services/webflow.png"
                  className="h-16"
                  alt="Strapi logo"
                  title="Strapi"
                />
              </picture>
              <picture>
                <img
                  src="/img/services/shopify.png"
                  className="w-15 h-16"
                  alt="shopify logo"
                  title="shopify"
                />
              </picture>
            </div>
            <div className="flex justify-between items-center flex-wrap gap-y-3 mt-6">
              <picture>
                <img
                  src="/img/services/tailwind.png"
                  className="h-28"
                  alt="Tailwind logo"
                  title="Tailwind"
                />
              </picture>
              <picture>
                <img
                  src="/img/services/gatsbyjs-logo.svg"
                  className="h-20"
                  alt="Gatsby logo"
                  title="Gatsby"
                />
              </picture>
            </div>
            <div className="flex justify-between items-center flex-wrap gap-y-3 mt-6">
              <picture>
                <img
                  src="/img/services/sass.svg"
                  className="h-12"
                  alt="Sass logo"
                  title="Sass"
                />
              </picture>
              <picture>
                <img
                  src="/img/services/strapi-logo.png"
                  className="h-12"
                  alt="strapi logo"
                  title="Strapi"
                />
              </picture>
              <picture>
                <img
                  src="/img/services/next.png"
                  className="h-10"
                  alt="Next logo"
                  title="Next"
                />
              </picture>
              <picture>
                <img
                  src="/img/services/ghost.png"
                  className="h-10"
                  alt="Ghostt logo"
                  title="Ghost"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopment;

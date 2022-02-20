import Head from "next/head";

const UiDevelopment = () => {
  return (
    <>
      <Head>
        <title>
          UI/UX Design and Development Company Bangalore | Zysk Technologies
        </title>
        <meta
          name="description"
          content="Zysk Technologies is a Bangalore based UI/UX design and
                    development company with expertise in front-end frameworks like Angular, React.js and Vue.js."
        />
        <meta
          name="Keywords"
          content="UI Design and Development ,Best UI UX Development Company in Bangalore,
  Angular and ReactJS Developers in Bangalore, Best UI UX Design and Development Company in Bangalore"
        ></meta>
      </Head>

      <section className="container-fluid py-14 mx-auto">
        <div className="service flex justify-around flex-wrap">
          <div className="illustration mb-4">
            <picture>
              <img
                src="/img/services/front-end-development.svg"
                alt="Front-end Development"
              />
            </picture>
          </div>

          <div className="w-full block lg:hidden"></div>

          <div className="description">
            <h1 className="header">Services</h1>
            <h2 className="title my-6">Front-end development</h2>
            <p className="highlight red mb-3">
              Design is not just what it looks like and feels like. Design is
              how it works. — Steve Jobs
            </p>
            <p className="mb-3">
              Front-end creates the first impression of your product. Providing
              a great experience when using your product along with a pretty
              outlook is what we thrive at. Our UI/UX services are perfect for
              solutions that require APIs to be developed in-house.
            </p>
            <p className="mb-3">
              Strong understanding of popular design principles coupled with our
              expertise in developing great front-end using Angular and ReactJS
              makes us a force to reckon with. The partnership of our front-end
              team with the expertise of your backend team will make sure we
              develop a product that is both useful and intuitive.
            </p>
          </div>

          <div className="description">
            <p className="highlight mb-3">
              Our understanding of tools like Bitbucket and Jira helps us work
              effectively and efficiently in teams and thereby to develop
              applications quickly without compromising the code quality !
            </p>
            <p className="mb-3">
              We have extensive experience in working with:
            </p>

            <div className="flex justify-between items-center mt-5 gap-x-8">
              <picture>
                <img
                  src="/img/services/react-logo.svg"
                  alt="React.js logo"
                  title="React.js"
                />
              </picture>
              <picture>
                <img
                  src="/img/services/angular-logo.svg"
                  alt="Angular logo"
                  title="Angular"
                />
              </picture>
              <picture>
                <img
                  src="/img/services/vue-logo.svg"
                  alt="Vue.js logo"
                  title="Vue.js"
                />
              </picture>
            </div>
            <div className="flex justify-between items-center mt-5 gap-x-5">
              <picture>
                <img
                  src="/img/services/next.png"
                  className="h-16"
                  alt="Next js"
                  title="Next.js"
                />
              </picture>
              <picture>
                <img
                  src="/img/services/nuxt.png"
                  alt="Nuxt.js logo"
                  title="Nuxt.js"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UiDevelopment;

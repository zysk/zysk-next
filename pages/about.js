import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>
          About Zysk Technologies | Web Apps Development Startup Bangalore
        </title>
        <meta
          name="description"
          content="Zysk Technologies is a web and mobile app development company. With a 25-member team and expertise in the latest technologies and are known for their excellent customer service."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container mx-auto py-8 px-6 xl:px-0">
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <div className="basis-2/5">
            <h1 className="header block md:hidden">About</h1>
            <picture>
              <img
                src="/img/about-us/about-zysk-technologies.svg"
                alt="About Zysk Illustration"
              />
            </picture>
          </div>
          <div className="basis-2/4">
            <h1 className="header hidden md:block">About Us</h1>
            <p className="mt-5 highlight">
              We started back in 2015 with a vision to build a company that
              would change the way people see IT services providers. And we have
              been true to our word ever since!{" "}
            </p>

            <p className="mt-5 highlight">
              We take pride in being a web development services provider with a
              difference and are confident that you&apos;ll never look back once
              you get in touch with us.
            </p>

            <p className="my-4 highlight">
              Let Zysk Technologies Be Your IT Company!
            </p>

            <div className="my-10">
              <a href="/contact" className="px-14 py-2 btn-custom btn-red">
                Hire Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-us"
        className="container-fluid py-5 mx-auto px-6 xl:px-0"
      >
        <header>
          <h1 className="header pb-10">Why Us</h1>
        </header>

        <div className="why-us flex justify-center md:justify-start items-center flex-wrap md:flex-nowrap">
          <div className="flex justify-around order-last md:order-first">
            <h2 className="number mr-10">01</h2>
            <div className="mr-5">
              <h3 className="title py-6 md:py-4">
                Innovative and feasible solutions
              </h3>
              <p className="description">
                Our diverse team of professionals are well equipped and loves to
                tailor creative but practical solutions that fit in with your
                requirements like a jigsaw puzzle. Our attention to detail
                maximizes our ability to give you the flawless outcome you are
                looking for. We are proficient in our exemplary knowledge of
                various programming languages and are confident that we will add
                unparalleled value to your business.
              </p>
            </div>
          </div>
          <img
            className="illustration order-first md:order-last"
            src="/img/about-us/latest-technologies.svg"
            alt="Upto date with Technology"
          />
        </div>

        <div className="why-us py-8 flex justify-center md:justify-end items-center flex-wrap md:flex-nowrap">
          <div className="flex justify-around items-start">
            <h2 className="number mr-10">02</h2>
            <div className="mr-5">
              <h3 className="title py-6 md:py-4">Great Service</h3>
              <p className="description">
                Be it design, UX or optimization, we ensure that you only get
                the best websites and applications when you engage our services.
                We are a fast, innovative and focused bunch whose prompt support
                and maintenance services have won us the admiration of clients.
              </p>
            </div>
          </div>
          <img
            className="illustration order-first md:order-last"
            src="/img/about-us/great-service.svg"
            alt="Great customer service"
          />
        </div>

        <div className="why-us py-8 flex justify-center md:justify-start items-center flex-wrap md:flex-nowrap">
          <div className="flex justify-around">
            <h2 className="number mr-10">03</h2>
            <div className="mr-5">
              <h3 className="title py-6 md:py-4">Process oriented</h3>
              <p className="description">
                In a nutshell, our process resembles SCRUM, an extension of
                AGILE METHODOLOGY. Our process begins with understanding your
                brand, your project requirements, and laying out the best
                feasible solutions to inspire your desired outcome. We practice
                total transparency and iterative feedback at every step - while
                delivering each workable software. This accommodates changing
                requirements and keeps you involved so that your product can
                represent you in the best way. Our team of experts always goes
                the extra mile to not only achieve your vision but to use our
                expertise to help take your business to the next level.
              </p>
            </div>
          </div>
          <img
            className="illustration order-first md:order-last"
            src="img/about-us/process-oriented.svg"
            alt="Process oriented"
          />
        </div>

        <div className="why-us py-8 flex justify-center md:justify-end items-center flex-wrap md:flex-nowrap">
          <div className="flex justify-around">
            <h2 className="number mr-10">04</h2>
            <div className="mr-5">
              <h3 className="title py-6 md:py-4">Exude quality at the core</h3>
              <p className="description">
                We recognize that applications need to be functional, appealing,
                scalable and maintainable. Therefore, we uphold a high standard
                when assessing quality in all aspects of our work - be it our
                code, project management, development processes or simply
                keeping an open and effective line of communication. This
                ensures that the products developed by Zysk Technologies always
                hits the mark of exemplariness/perfection.
              </p>
            </div>
          </div>
          <img
            className="illustration order-first md:order-last"
            src="/img/about-us/quality-applications.svg"
            alt="Quality applications"
          />
        </div>

        <div className="why-us py-8 flex justify-center md:justify-start items-center flex-wrap md:flex-nowrap">
          <div className="flex justify-around">
            <h2 className="number mr-10">05</h2>
            <div className="mr-5">
              <h3 className="title py-6 md:py-4">
                Embrancing promising technologies
              </h3>
              <p className="description">
                Technological innovation is moving at turbo speed and only a
                business that embraces that can stay ahead of the curve. Being
                informed and adept with all the relevant and latest tools and
                technologies is in our job description. So our enthusiastic team
                of tech nerds will make sure that your product always stays
                secure, fresh and relevant.
              </p>
            </div>
          </div>
          <img
            className="illustration order-first md:order-last"
            src="img/about-us/innovative-solutions.svg"
            alt="Innovation at the core"
          />
        </div>
      </section>
    </>
  );
};

export default About;

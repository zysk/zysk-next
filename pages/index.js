/* eslint-disable no-unused-vars */

import Head from "next/head";
import Button from "../components/common/button";
import { clients } from "../components/home/data";
import LogoCloud from "../components/home/client-slider";
import { useState } from "react";

const Home = () => {
  const [showData, setShowData] = useState(true);
  return (
    <>
      {/* Home Banner */}
      <Head>
        <title>Web Development Startup | Zysk Technologies</title>
        <meta
          name="description"
          content="Zysk Technologies an IT services startup based out of 
        Bangalore that offers attractive websites and applications with a team of qualified professionals."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showData ? (
        <section className="min-h-[100vh] flex flex-col justify-center items-center">
          <div className="max-w-7xl flex flex-col justify-center items-center mx-5 md:mx-auto">
            <img src="/img/landing/zysk-logo.svg" alt="Zysk-Technologies" />
            <h1 className=" text-2xl md:text-[40px] text-[#101828] mt-6 font-black">
              🚧 Exciting Changes Are Coming! 🚀
            </h1>
            <p className="text-[#475467] text-xl mt-6 text-center font-medium">
              We’re working behind the scenes to bring you a brand-new website
              experience.
            </p>
            <p className="text-[#475467] text-xl mt-1 text-center font-medium">
              Stay tuned—something amazing is on the way!
            </p>
            <div className="md:w-[460px] md:h-[207px] mt-8">
              <img
                src="/img/landing/under-maintenance.png"
                className="w-full h-full"
                alt="under-maintenance"
              />
            </div>
          </div>
        </section>
      ) : (
        <section>
          <section className="py-10 container mx-auto px-6 xl:px-0">
            <div className="flex justify-between items-center flex-col sm:flex-row">
              <div className="basis-1/2">
                <h1 className="header mb-7">
                  We get our geek hats on
                  <br />
                  and code your ideas to life.
                </h1>
                <p className="mt-4 highlight">
                  Unleash the power of a distinguished online presence with our
                  expertise.
                </p>
                <div className="mt-10">
                  <Button text="Read more" variant="black" url="/about" />

                  <Button text="Hire Us" variant="red" url="/contact" />
                </div>
              </div>
              <div className="basis-1/7 hidden md:block">
                <figure>
                  <img
                    src="/img/banner-image.png"
                    alt="Great Service, Great Results"
                  />
                  <figcaption className="title sr-only">
                    Great Service, Great Results
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
          {/* Home Banner */}

          {/* About Zysk */}
          <section className="container py-20 mx-auto px-6 xl:px-0">
            <div className="flex flex-row justify-between items-center flex-col sm:flex-row">
              <div className="basis-1/7">
                <h1 className="header block md:hidden">
                  Zysk Technologies is..
                </h1>
                <picture>
                  <img
                    className="py-8 md:py-0"
                    src="img/about-zysk-technologies-home.svg"
                    alt="About Zysk"
                  />
                </picture>
              </div>
              <div className="basis-1/2">
                <h1 className="header hidden md:block">
                  Zysk Technologies is..
                </h1>
                <p className="mt-4 highlight">
                  A web development services company based in Bangalore, India.
                  At Zysk, we understand that web and mobile applications are
                  the backbones of e-businesses, which is why we put in a lot of
                  effort and think outside the box to deliver solutions that
                  help businesses flourish.
                </p>
                <p className="mt-4 highlight">
                  Our team at Zysk is focused on understanding your requirements
                  thoroughly to deliver web and mobile solutions that are
                  accurate and cost-effective. We aim to convert new
                  opportunities into success stories by providing web solutions
                  that are simple, quick and scalable.
                </p>
                <div className="mt-10">
                  <a href="./about" className="px-10 py-2 btn-custom btn-red">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* About Zysk */}

          {/* Services */}
          <section className="container py-10 mx-auto px-6 xl:px-0">
            <header>
              <h1 className="header pb-3">Our Services</h1>
            </header>

            <div className="flex flex-wrap justify-between flex-col sm:flex-row">
              <div className="service-thumb text-dark basis-1/3 py-4">
                <picture>
                  <img
                    src="img/services/website-development.svg"
                    className="illustration"
                    alt="Website development service"
                  />
                </picture>
                <h2 className="title">Website Development</h2>
                <p className="py-3">
                  In the era of ubiquitous computing, a Business portfolio
                  optimized for devices of all sizes is a must! With the use of
                  frameworks like Gatsby...
                </p>
                <a className="link" href="./services/web-development">
                  Read more
                </a>
              </div>

              <div className="service-thumb text-dark basis-1/3 py-4">
                <picture>
                  <img
                    src="img/services/product-development.svg"
                    className="illustration"
                    alt="Product development"
                  />
                </picture>
                <h2 className="title">Product Development</h2>
                <p className="py-3">
                  Have an idea and need a {`"Technology partner"`} to bring your
                  idea to life? With our expertise of developing applications
                  from scratch, you...
                </p>
                <a className="link" href="./services/custom-application">
                  Read more
                </a>
              </div>

              <div className="service-thumb text-dark basis-1/3 py-4">
                <picture>
                  <img
                    src="img/services/front-end-development.svg"
                    className="illustration"
                    alt="Front-end and UI development"
                  />
                </picture>
                <h2 className="title">Front-end Development</h2>
                <p className="py-3">
                  Our expertise with Angular and React.js will ensure that your
                  Back-end APIs will get best User Interfaces without
                  comprimising the user...
                </p>
                <a className="link" href="./services/front-end-development">
                  Read more
                </a>
              </div>

              <div className="service-thumb text-dark basis-1/3 py-4">
                <picture>
                  <img
                    src="img/services/quality-assurance-services.svg"
                    className="illustration"
                    alt="Quality Assurance/QA Services"
                  />
                </picture>
                <h2 className="title">QA & Testing Services</h2>
                <p className="py-3">
                  A satisfactory User Experience needs an application without
                  bugs. Use our QA Services and automation testing expertise to
                  save yourself valuable time and money...
                </p>
                <a className="link" href="#">
                  Read more
                </a>
              </div>

              <div className="service-thumb text-dark basis-1/3 py-4">
                <picture>
                  <img
                    src="img/services/hybrid-mobile-app-development.svg"
                    className="illustration"
                    alt="Hybrid Mobile app development"
                  />
                </picture>
                <h2 className="title">Hybrid App Development</h2>
                <p className="py-3">
                  {`Don't`} want the hassle of managing two versions (Android
                  and iOS) of the same app? Hybrid Apps are the way to go!
                  Increase engagement by reaching your customers on multiple...
                </p>
                <a className="link" href="./services/hybrid-mobile-app">
                  Read more
                </a>
              </div>

              <div className="service-thumb text-dark basis-1/3 py-4">
                <picture>
                  <img
                    src="img/services/support-and-maintenance.svg"
                    className="illustration"
                    alt="Support & Maintenance for Mobile and Web Applications"
                  />
                </picture>
                <h2 className="title">Support & Maintenance</h2>
                <p className="py-3">
                  A successful online business requires a website that is fresh
                  and up-to-date and protected from hacks and attacks. Our
                  commitment to reaching stablity and perfection in our code...
                </p>
                <a className="link" href="#">
                  Read more
                </a>
              </div>
            </div>
          </section>
          {/* Services */}

          {/* Testimonials */}
          <section className="container py-10 mx-auto px-6 xl:px-0">
            <header>
              <h1 className="header pb-10">Testimonials</h1>
            </header>
            <div className="flex justify-between gap-10 flex-col sm:flex-row">
              <blockquote className="blockquote testimonial basis-1/2">
                <p className="mb-2">{`"I am very happy with the services provided by Zysk. They have been proactive in their approach
              from day one
              and were clear about what they needed from us at all times which helped tremendously while making plans for
              our website's revamp! The team is highly skilled, efficient & responsive - it really showed how much these
              guys know exactly how things should go down without having any previous experience working together."`}</p>
                <footer className="blockquote-footer">
                  Manisha Joshi, <cite title="Director">Director</cite>
                </footer>
                <figure className="client mt-2">
                  <img
                    src="./img/micronova_logo.png"
                    className="illustration"
                    alt="Micronova Group logo"
                  />
                  <figcaption className="title sr-only">
                    Micronova Group
                  </figcaption>
                </figure>
              </blockquote>

              <blockquote className="blockquote testimonial basis-1/2">
                <p className="mb-4">
                  {`"One key objective at Hyphen is to delight our customers through flawless applications, and Zysk's QA team has
              helped us achieve that over the last three years.`}
                </p>
                <p className="mb-2">
                  {`Their team is smart and comes up to speed fast, flexible to our changing needs and priorities, and process-
              and detail-oriented which I think is the #1 quality. We are thankful for showing us the way when it comes to
              quality assurance."`}
                </p>
                <footer className="blockquote-footer">
                  Arnaud Grunwald, <cite title="CEO">CEO</cite>
                </footer>
                <figure className="client mt-4">
                  <img
                    src="/img/gethyphen.png"
                    className="illustration"
                    alt="getHyphen logo"
                  />
                  <figcaption className="title sr-only">getHyphen</figcaption>
                </figure>
              </blockquote>
            </div>
          </section>
          {/* Testimonials */}

          {/* Our Clients */}
          <section className="container py-20 mx-auto px-6 xl:px-0">
            <header>
              <h1 className="header pb-14">Our Marquee Clients</h1>
            </header>

            <LogoCloud data={clients} />
          </section>
          {/* Our Clients */}
        </section>
      )}
    </>
  );
};

export default Home;

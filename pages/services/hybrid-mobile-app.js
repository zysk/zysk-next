import Head from "next/head";

const HybridMObileApp = () => {
  return (
    <>
      <Head>
        <title>Hybrid App Development | ZYSK Technologies</title>
        <meta
          name="description"
          content="Zysk Technologies, a mobile app development company in Bangalore,
                    develops cost-effective and intuitive mobile apps that work on all platforms."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container-fluid py-16 mx-auto">
        <div className="service flex justify-around flex-wrap">
          <div className="mb-4">
            <picture>
              <img
                className=" illustration"
                src="/img/services/hybrid-mobile-app-development.svg"
                alt="Website development illustration"
              />
            </picture>
          </div>

          <div className="w-full block lg:hidden"></div>

          <div className="description">
            <h1 className="header">Services</h1>
            <h2 className="title my-6">HYBRID MOBILE APP DEVELOPMENT</h2>
            <p className="highlight red mb-4">
              For businesses looking to maximize their chances of success,
              targeting mobile devices can mean the difference between success
              and obscurity.
            </p>
            <p className="mb-4">
              Our user-centric designs, and cost-effective hybrid mobile app
              solutions are perfect for your next big product idea. We develop
              cross-platform apps using a single codebase with the help of
              popular hybrid application frameworks like Ionic and React Native.
            </p>
            <p className="mb-4">
              “Cross-platform” goes beyond just iOS and Android, it means a
              consistent and intuitive user experience across mobile and
              desktop, web and app store, phone and tablet.
            </p>
          </div>

          <div className="description">
            <p className="highlight mb-4">
              According to recent reports, Hybrid mobile apps are beginning to
              dominate the app stores. Leading this trend are apps like
              Facebook, Walmart, Bloomberg and Instagram. Hybrid Mobile Apps are
              the new age solution for the new-age company.
            </p>
            <p className="mb-4">
              We have extensive experience in working with:
            </p>
            <div className="flex justify-between items-center flex-wrap mt-8 gap-y-3">
              <picture>
                <img
                  src="/img/services/react-native.svg"
                  alt="React Native logo"
                  title="React Native"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HybridMObileApp;

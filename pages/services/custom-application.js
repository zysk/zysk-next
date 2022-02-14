import Head from 'next/head';

const CustomApplication = () => {
    return (
        <>
            <Head>
                <title>Product Development at Zysk Technologies Bangalore</title>
                <meta name="description"
                    content="Zysk Technologies offers product development services for individuals and startups
    who want to bring their ideas to life with the use of latest technologies." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <section className="container-fluid py-16 mx-auto">

                <div className="service flex justify-around flex-wrap">

                    <div className="mb-4">
                        <picture>
                            <img className=" illustration" src="/img/services/product-development.svg"
                                alt="Website development illustration" />
                        </picture>
                    </div>

                    <div className="w-full block lg:hidden"></div>

                    <div className="description">
                        <h1 className="header">Services</h1>
                        <h2 className="title my-6">PRODUCT DEVELOPMENT</h2>
                        <p className="highlight red mb-4">
                            Have the next big idea?
                            <br />
                            We’ll help you realise it.
                        </p>
                        <p className="mb-4">
                            Our comprehensive and scalable technology solutions will support you in achieving your business goals both in short and long term. From design to deployment we take care of every facet of the product development life cycle. Our experience in developing products enables us to bring valuable insights to the table to help you further your product idea.
                        </p>
                        <p className="mb-4">
                            With Open Source Technologies evolving faster than ever, our geeky team ensure that we stay up-to date and the tech stacks we use stays current for at least 24 months. Great user interface design with quality code is our Mantra for excellent user experiences.
                        </p>
                    </div>


                    <div className="description">
                        <p className="highlight mb-4">
                            We take pride in having worked as technology partners with some of the most promising startups in India and we’re rearing to get started with yours!
                        </p>
                        <p className="mb-4">
                            We have extensive experience in working with:
                        </p>
                        <div className="flex justify-between items-center flex-wrap mt-8 gap-y-3">
                            <picture>
                                <img src="/img/services/angular-logo.svg" alt="Angular logo" title="Angular" />
                            </picture>
                            <picture>
                                <img src="/img/services/laravel-logo.svg" alt="Laravel logo" title="Laravel" />
                            </picture>
                            <picture>
                                <img src="/img/services/django-logo.svg" alt="Django logo" title="Django" />
                            </picture>
                            <picture>
                                <img src="/img/services/amazon-web-services-logo.svg" alt="AWS logo" title="AWS" />
                            </picture>
                            <picture>
                                <img src="/img/services/mysql-logo.svg" alt="MySQL logo" title="MySQL" />
                            </picture>
                            <picture>
                                <img src="/img/services/node.png" className="h-16" alt="Node js logo" title="Node js" />
                            </picture>
                            <picture>
                                <img src="/img/services/postgre.jpeg" className="h-20" alt="postgre logo" title="postgre" />
                            </picture>
                            <picture>
                                <img src="/img/services/vue-logo.svg" alt="Vue logo" title="Vue" />
                            </picture>
                            <picture>
                                <img src="/img/services/react-logo.svg" alt="React logo" title="React" />
                            </picture>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default CustomApplication;
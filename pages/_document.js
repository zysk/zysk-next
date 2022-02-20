import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getServerSideProps(ctx) {
    const initialProps = await Document.getServerSideProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Enable GTM only for production environment */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-66233587-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-66233587-1');
         `,
            }}
          />
        </Head>
        <body>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
          {process.env.env == "PROD" && (
            <>
              <script
                src="https://t.ghostboard.io/min.js"
                async
                defer
                data-gbid="609a7c953a29de7474d49404"
              ></script>
              <noscript>
                <img
                  src="https://ghostboard.io/api/noscript/609a7c953a29de7474d49404/pixel.gif"
                  alt="Ghostboard pixel"
                />
              </noscript>
            </>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;

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
          {process.env.env === "PROD" && (
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
          <script>
            var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?68350';
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = url;
            var options = {
              "enabled":true,
              "chatButtonSetting":{
                  "backgroundColor":"#4dc247",
                  "ctaText":" Let's Talk",
                  "borderRadius":"25",
                  "marginLeft":"0",
                  "marginBottom":"50",
                  "marginRight":"50",
                  "position":"right"
              },
              "brandSetting":{
                  "brandName":"Zysk Tech",
                  "brandSubTitle":"Tech is the language we talk",
                  "brandImg":"https://zysk-next-git-dev-zysktech.vercel.app/img/whatsapp_dp.png",
                  "welcomeText":"Hi there!",
                  "messageText":"Hello",
                  "backgroundColor":"#0a5f54",
                  "ctaText":"Start Chat",
                  "borderRadius":"25",
                  "autoShow":false,
                  "phoneNumber":"919513478223"
              }
            };
            s.onload = function() {
                CreateWhatsappChatWidget(options);
            };
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

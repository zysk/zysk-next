import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import Layout from "../components/common/layout";
// Import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <Script strategy="lazyOnload">
        {`var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?68350';
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
    x.parentNode.insertBefore(s, x);`}
      </Script> */}
    </Layout>
  );
}

export default MyApp;

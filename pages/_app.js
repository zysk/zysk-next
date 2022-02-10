import '../styles/globals.scss';
import 'tailwindcss/tailwind.css';
import Layout from '../components/common/layout';
import { useEffect } from "react";
import tawkTo from "tawkto-react";

function MyApp({ Component, pageProps }) {

  // const tawkToPropertyId = "5c05654840105007f37ac870";
  // const tawkToKey = "default";

  // useEffect(() => {
  //   var tawk = new tawkTo(tawkToPropertyId, tawkToKey)
  //   tawk.onStatusChange((status) => {
  //   })
  // }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

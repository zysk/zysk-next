import Navbar from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";
import Head from "next/head"; // Import the next/head module

const Layout = ({ children }) => {
  const router = useRouter();

  const routesWithoutNavbarFooter = ["/zyskathon"]; // Currently im not displaying for <About/>  Component with route "/about"

  const shouldDisplayNavbarFooter = !routesWithoutNavbarFooter.includes(
    router.pathname
  );

  return (
    <>
      {/* Use the next/head module to conditionally set the body class */}
      <Head>
        {shouldDisplayNavbarFooter ? (
          <style>{`body { border: 0.5rem solid #ff4b4b; }`}</style>
        ) : (
          <style>{`body { border: none; }`}</style>
        )}
      </Head>
      <div>
        {shouldDisplayNavbarFooter && <Navbar />}
        <main>{children}</main>
        {shouldDisplayNavbarFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout;

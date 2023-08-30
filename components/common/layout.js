import Navbar from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  const routesWithoutNavbarFooter = ["/zyskathon"]; // Currently im not displaying for <About/>  Component with route "/about"

  const shouldDisplayNavbarFooter = !routesWithoutNavbarFooter.includes(
    router.pathname
  );

  return (
    <>
      <div>
        {shouldDisplayNavbarFooter && <Navbar />}
        <main>{children}</main>
        {shouldDisplayNavbarFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout;

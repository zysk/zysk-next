/* eslint-disable no-unused-vars */

import Navbar from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

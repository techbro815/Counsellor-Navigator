import React from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar item1="College Predictor" item2="Scholarships" item3="Contact Us" item4="Compare College" />
      <main>{children}</main>
    </>
  );
};

export default Layout;

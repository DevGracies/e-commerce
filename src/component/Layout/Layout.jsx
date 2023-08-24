import React from "react";
import Footer from "../Footer/Footer";
import Top from "../Top/Top";
import Nav from "../Navigation/Nav";

function Layout({ Heart, Cart, User, children }) {
  return (
    <div>
      <Top />
      <Nav Heart={Heart} Cart={Cart} User={User} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

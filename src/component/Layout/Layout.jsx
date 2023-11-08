import React from "react";
import Footer from "../Footer/Footer";
import Top from "../Top/Top";
import Nav from "../Navigation/Nav";
import styles from "./Layout.module.css";
import styless from "../Navigation/Nav.module.css";
function Layout({ Heart, Cart, User, children }) {
  return (
    <div>
      <Top />
      <div className={styless.main}>
        <Nav Heart={Heart} Cart={Cart} User={User} />
      </div>
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

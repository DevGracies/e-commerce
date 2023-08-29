import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Contact from "../Contact/Contact";
import About from "../About/About";
import SignUp from "../SignUp/SignUp";
import Error from "../Error/Error";
import Wishlist from "../Screens/Wishlist/Wishlist";
import Cart from "../Screens/Cart/Cart";
import Carts from "./Cart";
import Account from "../Screens/Account/Account";
import Login from "../Register/Login";
import Shop from "../Screens/Shop/Shop";
import Layout from "../Layout/Layout";
import Heart from "./Heart";
import User from "./User";
import Body from "../Screens/Dashboard/Body";

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Body" element={<Body />} />
          <Route
            path="/"
            element={
              <Layout Heart={Heart} Cart={Carts}>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/Contact"
            element={
              <Layout Heart={Heart} Cart={Carts} User={User}>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/About"
            element={
              <Layout Heart={Heart} Cart={Carts} User={User}>
                <About />
              </Layout>
            }
          />
          <Route
            path="/SignUp"
            element={
              <Layout>
                <SignUp />
              </Layout>
            }
          />
          <Route
            path="/Wishlist"
            element={
              <Layout Heart={Heart} Cart={Carts} User={User}>
                <Wishlist />
              </Layout>
            }
          />
          <Route
            path="/Account"
            element={
              <Layout Heart={Heart} Cart={Carts} User={User}>
                <Account />
              </Layout>
            }
          />
          <Route
            path="/Cart"
            element={
              <Layout Heart={Heart} Cart={Carts} User={User}>
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/Login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/Shop"
            element={
              <Layout Heart={Heart} Cart={Carts} User={User}>
                <Shop />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout Heart={Heart} Cart={Carts} User={User}>
                <Error />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;

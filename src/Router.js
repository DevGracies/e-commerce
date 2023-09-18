import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
import SignUp from "./component/SignUp/SignUp";
import Error from "./Screens/Error/Error";
import Wishlist from "./Screens/Wishlist/Wishlist";
import Cart from "./Screens/Cart/Cart";
import Carts from "./component/Navigation/Cart";
import Login from "./component/Register/Login";
import Account from "./Screens/Account/Account";
import Shop from "./Screens/Shop/Shop";
import Layout from "./component/Layout/Layout";
import Heart from "./component/Navigation/Heart";
import User from "./component/Navigation/User";
import Body from "./Screens/Dashboard/Body";
import Customer from "./Screens/Dashboard/Customer";
import Both from "./Screens/Dashboard/Both";
import NestedRouting from "./Screens/Dashboard/NestedRouting/NestedRouting";
import Add from "./Screens/Dashboard/NestedRouting/Add";
import List from "./Screens/Dashboard/NestedRouting/List";
import Search from "./Screens/Dashboard/NestedRouting/Search";
import CartClick from "./Screens/Heart/CartClick";

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/NestedRouting" element={<NestedRouting />}>
            <Route path="Add" element={<Add />} />
            <Route path="List" element={<List />} />
            <Route path="Search" element={<Search />} />
            {/* <Route path=":id" element={<DisplayAll />} /> */}
          </Route>
          <Route
            path="/Body"
            element={
              <Body>
                <Both />
              </Body>
            }
          />
          <Route
            path="/Customer"
            element={
              <Body>
                <Customer />
              </Body>
            }
          />
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
            path="/CartClick"
            element={
              <Layout Heart={Heart} Cart={Carts} User={User}>
                <CartClick />
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

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "../Screens/Home/Home";
import Contact from "../Contact/Contact";
import About from "../About/About";
import SignUp from "../SignUp/SignUp";
import Error from "../Error/Error";
import Wishlist from '../Screens/Wishlist/Wishlist';
import Cart from '../Screens/Cart/Cart';
import Account from '../Account/Account';
import Login from '../Login/Register/Login';
import Shop from '../Shop/Shop';
import Layout from '../Layout/Layout';
function Routing() {
  return (
    <div>
      <Router>
        <Routes> 
          <Route path="/" element={
            <Layout>
              <Home />
          </Layout>
          } />
          <Route path="/Contact" element={
            <Layout>
              <Contact />
            </Layout>
          } />
          <Route path="/About" element={
          <Layout>              
            <About />
          </Layout>
          } />
          <Route path="/SignUp" element={
          <Layout>              
            <SignUp />
          </Layout>
          }
          />
          <Route path="/Wishlist" element={
            <Layout>
              <Wishlist />
            </Layout>
          } />
          <Route path="/Account" element={
            <Layout>
              <Account />
            </Layout>
          } />
          <Route path="/Cart" element={
            <Layout>
              <Cart />
            </Layout>
          } />
          <Route path="/Login" element={
            <Layout>
              <Login />
            </Layout>
          } />
          <Route path="/Shop" element={
            <Layout>
              <Shop />
            </Layout>
          } />
          <Route path="*" element={
            <Layout>
              <Error />
            </Layout>
          } />
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
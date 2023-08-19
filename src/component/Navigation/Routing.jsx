import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import About from "../About/About";
import SignUp from "../SignUp/SignUp";
import Error from "../Error/Error";
import Header from './Header';
function Routing() {
  return (
    <div>
      <Router>
        <Header />
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="*" element={<Error />} />
            </Routes>
      </Router>
    </div>
  )
}

export default Routing
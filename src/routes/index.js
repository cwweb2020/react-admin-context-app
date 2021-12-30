import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../views/About";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Layout from "./Layout";
import AuthPorvider from "../context/AuthPorvider";
import Information from "../views/Information";
import PrivateRoute from "../components/PrivateRoute";

const RouteApp = () => {
  return (
    <>
      <BrowserRouter>
        <AuthPorvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About /> } />
            <Route path="contact" element={<Contact /> } />  {/* // NO LLEVAN BARRA POR QUE YA ESTA EN EL LAYOUT */}
            <Route path="information" element={ <PrivateRoute redirect="/" component={ <Information /> } /> } />
          </Route>
        </Routes>
        </AuthPorvider>
      </BrowserRouter>
    </>
  );
};



export default RouteApp;

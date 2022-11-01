import React from "react";
import {Route, Routes, } from "react-router-dom"
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Client from "../pages/client/Client";
import Service from "../pages/services/Service";
import ContactUs from "../pages/contact-us/ContactUs";
import Main from "../pages/Main"
const Root = () => {
    return (
        <>
            <Main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/" element={<About />}></Route>
                    <Route path="/" element={<Client />}></Route>
                    <Route path="/" element={<Service />}></Route>
                    <Route path="/" element={<ContactUs/>}></Route>
                </Routes>
            </Main>
        </>
  )
};

export default Root;

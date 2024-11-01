import Hero from "./Hero";
import Education from "./Eduction";
import Awards from "./Awards";
import Pricing from "./Pricing";
import Stats from "./Stats";
import React from 'react';
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import { link } from "../../../../backend/Routes/AuthRoute";
function HomePage () {
    return (
    <>
    <Hero/>
    <Awards/>
    <Stats/>
    <Pricing/>
    <Education/>
    <OpenAccount/>
    </>
    );
};
export default HomePage ;
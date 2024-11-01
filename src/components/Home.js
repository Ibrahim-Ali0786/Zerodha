import React from "react";
import { useCookies } from "react-cookie";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import {useEffect,useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
       window.location.href="https://frontend.d1dk8zlerjmfx7.amplifyapp.com/login";
      }
      const { data } = await axios.post(
        "http://localhost:8080",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? navigate('/')
        : (removeCookie("token"), window.location.href="https://frontend.d1dk8zlerjmfx7.amplifyapp.com/login");
    };
    verifyCookie();
  },[]);
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;

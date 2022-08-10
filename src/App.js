import "./App.css";
import "./index.css";
import React from "react";
import MainPage from "./component/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import LoginPage from "./component/LoginPage/LoginPage";
import RegisterPage from "./component/RegisterPage/RegisterPage";
import VedioPage from "./component/VideoPage/VedioPage";
import AboutPage from "./component/AboutPage/AboutPage";
import AdminPage from "./component/AdminPage/AdminPage";

import Profile from "./component/Profile/Profile";
import ProfileList from "./component/Profile/ProfileList";
import ProfileHome from "./component/Profile/ProfileHome";
import ProfileHead from "./component/Profile/ProfileHead";
import ProfileInfo from "./component/Profile/ProfileInfo";
import ProfileLogin from "./component/Profile/ProfileLogin";
import ProfilePay from "./component/Profile/ProfilePay";

import Zone from "./component/MyZone/Zone";
import MyZoneHome from "./component/MyZone/MyZoneHome";
import MyZoneVideos from "./component/MyZone/MyZoneVideos";
import MyZoneFavorite from "./component/MyZone/MyZoneFavorite";
import MyZoneLike from "./component/MyZone/MyZoneLike";

import History from "./component/History/History";

import Upload from "./component/Upload/Upload";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        {/* section by renqiu */}
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/video/:url" element={<VedioPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>

        {/* section by puzhen */}
        <Route path="profile" element={<Profile />}>
          <Route path="" element={<ProfileHome />}></Route>
          <Route path="info" element={<ProfileInfo />}></Route>
          <Route path="head" element={<ProfileHead />}></Route>
          <Route path="loginrecord" element={<ProfileLogin />}></Route>
          <Route path="pay" element={<ProfilePay />}></Route>
        </Route>
        <Route path="myzone" element={<Zone />}>
          <Route path="" element={<MyZoneHome />}></Route>
          <Route path="videos" element={<MyZoneVideos />}></Route>
          <Route path="favorite" element={<MyZoneFavorite />}></Route>
          <Route path="like" element={<MyZoneLike />}></Route>
        </Route>
        <Route path="history" element={<History />}></Route>
        <Route path="upload" element={<Upload />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import './index.css';
import React from 'react';
import MainPage from "./component/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";

import Profile from './component/Profile/Profile';
import ProfileList from './component/Profile/ProfileList';
import ProfileHome from './component/Profile/ProfileHome';
import ProfileHead from './component/Profile/ProfileHead';
import ProfileInfo from './component/Profile/ProfileInfo';
import ProfileLogin from './component/Profile/ProfileLogin';
import Zone from './component/MyZone/Zone';
import MyZoneHome from './component/MyZone/MyZoneHome';
import MyZoneVedios from './component/MyZone/MyZoneVedios';
import MyZoneFavorite from './component/MyZone/MyZoneFavorite';
import MyZoneLike from './component/MyZone/MyZoneLike';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>

        {/* section by renqiu */}
        <Route path="/" element={<MainPage />}></Route>

        {/* section by puzhen */}
        <Route path='profile' element={<Profile />}>
          <Route path='' element={<ProfileHome />}></Route>
          <Route path='info' element={<ProfileInfo />}></Route>
          <Route path='head' element={<ProfileHead />}></Route>
          <Route path='loginrecord' element={<ProfileLogin />}></Route>
        </Route>
        <Route path='myzone' element={<Zone />}>
          <Route path='' element={<MyZoneHome />}></Route>
          <Route path='vedios' element={<MyZoneVedios />}></Route>
          <Route path='favorite' element={<MyZoneFavorite />}></Route>
          <Route path='like' element={<MyZoneLike />}></Route>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;

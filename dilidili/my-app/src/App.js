import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react';
import './index.css';


import './App.css';
import Profile from './pages/Profile';
import ProfileList from './components/Profile/ProfileList';
import ProfileHome from './components/Profile/ProfileHome';
import ProfileHead from './components/Profile/ProfileHead';
import ProfileInfo from './components/Profile/ProfileInfo';
import ProfileLogin from './components/Profile/ProfileLogin';
import Zone from './pages/Zone';
import MyZoneHome from './components/MyZone/MyZoneHome';
import MyZoneVedios from './components/MyZone/MyZoneVedios';
import MyZoneFavorite from './components/MyZone/MyZoneFavorite';
import MyZoneLike from './components/MyZone/MyZoneLike';
function App() {
  return (
    <div>
      <p>home : component of app</p>
      <Router>

        {/* <ProfileHome /> */}
        <Routes>
          <Route path='profile' element={<Profile />}>
            <Route path='' element={<ProfileHome />}></Route>
            <Route path='info' element={<ProfileInfo />}></Route>
            <Route path='head' element={<ProfileHead />}></Route>
            <Route path='loginrecord' element={<ProfileLogin />}></Route>
          </Route>
          <Route path='myzone' element={<Zone/>}>
            <Route path='' element={<MyZoneHome />}></Route>
            <Route path='vedios' element={<MyZoneVedios />}></Route>
            <Route path='favorite' element={<MyZoneFavorite />}></Route>
            <Route path='like' element={<MyZoneLike />}></Route>
          </Route>

        </Routes>
        {/* <section common footer /> */}
      </Router>
    </div>
  );
}

export default App;

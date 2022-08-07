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
function App() {
  return (
    <div>
      <p>home</p>
      <Router>

      {/* <ProfileHome /> */}
        <Routes>
          <Route path='profile' element={<Profile />}>
            <Route path='' element={<ProfileHome />}></Route>
            <Route path='info' element={<ProfileInfo />}></Route>
            <Route path='head' element={<ProfileHead />}></Route>
            <Route path='loginrecord' element={<ProfileLogin />}></Route>
          </Route>

        </Routes>
        {/* <section common footer /> */}
      </Router>
    </div>
  );
}

export default App;

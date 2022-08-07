import React from 'react'
import { BrowserRouter as Router, Outlet, IndexRoute, Routes, Route, Link } from 'react-router-dom'
import ProfileList from '../components/Profile/ProfileList'
import ProfileHome from '../components/Profile/ProfileHome'
import ProfileHead from '../components/Profile/ProfileHead'
import ProfileInfo from '../components/Profile/ProfileInfo'
import ProfileLogin from '../components/Profile/ProfileLogin'
//the profile page
function Profile(props) {
    // const match = props.match;
    // console.log(match.url);

    return (
        <div class="container">
            <p>profile</p>

            <div class="col-12 row" id="profilePanel">
                <ProfileList />
                {/* outlet required to load the components presented by secondary routes */}
                <Outlet />

            </div>
            {/* <section for common footer> */}


        </div>
    )
}

export default Profile
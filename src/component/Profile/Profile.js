import React from 'react'
import { BrowserRouter as Router, Outlet, IndexRoute, Routes, Route, Link } from 'react-router-dom'
import ProfileList from './ProfileList'

//the profile page
function Profile(props) {
    // const match = props.match;
    // console.log(match.url);

    return (
        <div class="container">
            {/* <p>profile</p> */}

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
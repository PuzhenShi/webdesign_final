
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React, { useState } from 'react';

//the left nav bar of profile page
function ProfileList() {
    return (
        <div class="col-4 col-sm-4 col-md-3 col-xl-3 rounded" id="profileLeftNav">
            <div class="col">
                <span id="profileLeftNavTitle">My Space</span>
                <div class="list-group">
                    {/* to the home page of profile */}
                    <Link to="/profile" class="list-group-item list-group-item-action">Home</Link>
                    {/* to the info page of profile, enable to edit your personal information */}
                    <Link to="/profile/info" class="list-group-item list-group-item-action">My Info</Link>
                    {/* to the head page of profile, enable to upload or edit head sculpture */}
                    <Link to="/profile/head" class="list-group-item list-group-item-action">Profile Photo</Link>
                    {/* to the head page of profile, enable to pay for the premium member, payment api here */}
                    <Link to="/profile/pay" class="list-group-item list-group-item-action">Premium</Link>
                    {/* to the head page of profile, enable to review the record of login, it's fine to leave it disabled */}
                    <Link to="/profile/loginrecord" class="list-group-item list-group-item-action disabled">Login Record</Link>

                </div>
            </div>
        </div>
    )
}

export default ProfileList
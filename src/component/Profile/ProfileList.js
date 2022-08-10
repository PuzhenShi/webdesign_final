
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React, { useState } from 'react';

//the left nav bar of profile page
function ProfileList() {
    return (
        <div class="col-4 col-sm-4 col-md-3 col-xl-3 rounded" id="profileLeftNav">
            {/* <div class="col-4 col-sm-4 col-md-3 col-xl-3 rounded" id="profilePhotoFrame">
                <img src="https://i2.hdslb.com/bfs/archive/c43c10f8622a503cdb08d9d015ede56b98a70694.png" alt="" />
            </div> */}
            
            <div class="col">
                {/* <span id="profileLeftNavTitle">My Space</span> */}
                <div class="list-group">
                    {/* to the home page of profile */}
                    <Link to="/profile" class="list-group-item list-group-item-action">
                        <i class="bi bi-house-door"></i>
                        <span class="profileListTitle">Home</span>
                    </Link>
                    {/* to the info page of profile, enable to edit your personal information */}
                    <Link to="/profile/info" class="list-group-item list-group-item-action">
                        <i class="bi bi-clipboard-minus"></i>
                        <span class="profileListTitle">Edit Info</span>
                    </Link>
                    {/* to the head page of profile, enable to upload or edit head sculpture */}
                    <Link to="/profile/head" class="list-group-item list-group-item-action">
                        <i class="bi bi-person-circle"></i>
                        <span class="profileListTitle">Profile Photo</span>
                    </Link>
                    {/* to the head page of profile, enable to pay for the premium member, payment api here */}
                    <Link to="/profile/pay" class="list-group-item list-group-item-action">
                        <i class="bi bi-star"></i>
                        <span class="profileListTitle">Premium</span>
                    </Link>
                    {/* to the head page of profile, enable to review the record of login, it's fine to leave it disabled */}
                    {/* <Link to="/profile/loginrecord" class="list-group-item list-group-item-action disabled">Login Record</Link> */}

                </div>
            </div>
        </div>
    )
}

export default ProfileList
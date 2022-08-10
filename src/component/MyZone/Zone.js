import React from 'react'
import { BrowserRouter as Router, Outlet, IndexRoute, Routes, Route, Link } from 'react-router-dom'
import MyZoneBar from './MyZoneBar'
import "./Zone.css"
function Zone() {
    return (
        <body id="zoneBody">
            <div class="container">
                {/* <p>Zone</p> */}
                <div class="col-12 row" id="zonePanel">
                    {/* the common navbar here */}
                    <MyZoneBar />                    
                    {/* outlet required to load the components presented by secondary routes */}
                    <Outlet />

                </div>
                {/* <section for common footer> */}


            </div>
        </body>
    )
}

export default Zone
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// this part is unused
function MyZoneList() {
  
  return (
    <div class="col-4 ml-4 mb-4 rounded" id="myZoneLeftNav">
            <div class="col">
                <span id="myZoneLeftNavTitle">My Lists</span>
                <div class="list-group">
                    {/* to the home page of myzone */}
                    <Link to="/myzone" class="list-group-item list-group-item-action">Home</Link>
                    
                    <Link to="/myzone/vedios" class="list-group-item list-group-item-action">My vedios</Link>
                    
                    <Link to="/myzone/favorite" class="list-group-item list-group-item-action">My favorite</Link>
                    
                    <Link to="/myzone/like" class="list-group-item list-group-item-action">Recent like</Link>
                    

                </div>
            </div>
        </div>
  )
}

export default MyZoneList
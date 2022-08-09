import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
//the home page of my zone
//including the link to my uploaded vedios, my favorite vedios and recent like vedios
function MyZoneHome() {
    return (
        <div class="container">
            <div class="col-12 row" id="myZonePanel">
                <div class="col-10 ml-10 mb-10 rounded">
                    {/* first eight vedio(my vedio) display card will be posted here */}
                    <div class="col-10 ml-10 mb-10 rounded" id="myZoneVedios">
                        <span>My Vedios</span>
                        <Link to="/myzone/vedios">
                            <Button variant="primary">
                                More
                            </Button>
                        </Link>
                    </div>
                    {/* first eight vedio(favorite) display card will be posted here */}
                    <div class="col-10 ml-10 mb-10 rounded" id="myZoneFavorite">
                        <span>My Favorite</span>
                        <Link to="/myzone/favorite">
                            <Button variant="primary">
                                More
                            </Button>
                        </Link>
                    </div>
                    {/* first eight vedio(recent like) display card will be posted here */}
                    <div class="col-10 ml-10 mb-10 rounded" id="myZoneLike">
                        <span>Recent Like</span>
                        <Link to="/myzone/like">
                            <Button variant="primary">
                                More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyZoneHome
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import VideoCover from "../VideoCover/VideoCover";
//the home page of my zone
//including the link to my uploaded vedios, my favorite vedios and recent like vedios
function MyZoneHome() {
    const video = {
        title: "title",
        duration: 180,
        views: 25,
        cover: 0,
        author: "author",
        link: "/video",
        date: "08/20",
    };

    return (
        <div class="container">
            <div class="col-12 row" id="myZonePanel">
                <div class="col-10 rounded">
                    {/* first eight vedio(my vedio) display card will be posted here */}
                    <div class="col-12 rounded" id="myZoneVedios">
                        <span>My Vedios</span>
                        <Link to="/myzone/vedios">
                            <Button variant="primary">
                                More
                            </Button>
                        </Link>

                        <div class="col-12 row" id="myZoneVediosGallery">
                            <div class="col-4">
                                <VideoCover
                                    videoInfo={video}
                                    coverWidth={200}
                                    coverHeight={120}
                                    width={240}
                                ></VideoCover>
                            </div>
                            <div class="col-4">
                                <VideoCover
                                    videoInfo={video}
                                    coverWidth={200}
                                    coverHeight={120}
                                    width={240}
                                ></VideoCover>
                            </div>
                            <div class="col-4">
                                <VideoCover
                                    videoInfo={video}
                                    coverWidth={200}
                                    coverHeight={120}
                                    width={240}
                                ></VideoCover>
                            </div>
                            
                            
                        </div>
                    </div>
                    {/* first eight vedio(favorite) display card will be posted here */}
                    <div class="col-12 rounded" id="myZoneFavorite">
                        <span>My Favorite</span>
                        <Link to="/myzone/favorite">
                            <Button variant="primary">
                                More
                            </Button>
                        </Link>

                        <div class="col-12 row" id="myZoneFavoriteGallery">
                            <div class="col-4">
                                <VideoCover
                                    videoInfo={video}
                                    coverWidth={200}
                                    coverHeight={120}
                                    width={240}
                                ></VideoCover>
                            </div>
                            <div class="col-4">
                                <VideoCover
                                    videoInfo={video}
                                    coverWidth={200}
                                    coverHeight={120}
                                    width={240}
                                ></VideoCover>
                            </div>
                            <div class="col-4">
                                <VideoCover
                                    videoInfo={video}
                                    coverWidth={200}
                                    coverHeight={120}
                                    width={240}
                                ></VideoCover>
                            </div>
                            
                        </div>
                    </div>
                    {/* first eight vedio(recent like) display card will be posted here */}
                    
                </div>
            </div>
        </div>
    )
}

export default MyZoneHome
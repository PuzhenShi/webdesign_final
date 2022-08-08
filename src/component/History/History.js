import React from 'react'
import { BrowserRouter as Router, Outlet, IndexRoute, Routes, Route, Link } from 'react-router-dom'
import VideoCover from "../VideoCover/VideoCover";
import Button from 'react-bootstrap/Button';

function History() {

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
            <p>History</p>
            <div class="col-12" id="histroyHeadBar">

                <div class="col-5">
                    {/* search and display the record */}
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search history" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

            </div>
            <div class="col-12 row" id="historyPanel">
{/* should display the records */}
                {/* a single record unit should be like this */}
                <div class="col-10 row unit-record">
                    <div class="col-4 videoCover">
                        <VideoCover
                            videoInfo={video}
                            coverWidth={200}
                            coverHeight={120}
                            width={240}
                        ></VideoCover>
                    </div>
                    <div class="col-4 historyTime">
                        <span class="history-time">
                            08/08/2022 15:24
                        </span>
                    </div>
                    <div class="col-2 deleteBtn">
                        <Button variant="primary">
                            delete
                        </Button>
                    </div>
                </div>

                <div class="col-10 row unit-record">
                    <div class="col-4 videoCover">
                        <VideoCover
                            videoInfo={video}
                            coverWidth={200}
                            coverHeight={120}
                            width={240}
                        ></VideoCover>
                    </div>
                    <div class="col-4 historyTime">
                        <span class="history-time">
                            08/08/2022 15:24
                        </span>
                    </div>
                    <div class="col-2 deleteBtn">
                        <Button variant="primary">
                            delete
                        </Button>
                    </div>
                </div>

                <div class="col-10 row unit-record">
                    <div class="col-4 videoCover">
                        <VideoCover
                            videoInfo={video}
                            coverWidth={200}
                            coverHeight={120}
                            width={240}
                        ></VideoCover>
                    </div>
                    <div class="col-4 historyTime">
                        <span class="history-time">
                            08/08/2022 15:24
                        </span>
                    </div>
                    <div class="col-2 deleteBtn">
                        <Button variant="primary">
                            delete
                        </Button>
                    </div>
                </div>

                {/* outlet required to load the components presented by secondary routes */}
                <Outlet />

            </div>
            {/* <section for common footer> */}


        </div>
    )
}

export default History
import React from 'react'
import VideoCover from "../VideoCover/VideoCover";
function MyZoneVideos() {
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
        <div class="col-12 ml-12 mb-12 rounded" id="myZoneVideos">
            <div class="col-12 rounded" id="myZoneVideosBar">
              <span>My Vedios</span>
              
            </div>
            {/* video card displayed here */}
            <div class="col-12 row" id="myZoneVideosGalleryFull">
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

    )
}

export default MyZoneVideos
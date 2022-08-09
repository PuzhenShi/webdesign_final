import React from 'react'
import VideoCover from "../VideoCover/VideoCover";
function MyZoneVedios() {
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
        <div class="col-10 ml-10 mb-10 rounded" id="myZoneVedios">
            <div>MyZoneVedios</div>
            {/* vedio card displayed here */}
            <div class="col-12 row" id="myZoneVediosGalleryFull">
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

export default MyZoneVedios
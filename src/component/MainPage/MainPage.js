import React from "react";
import VideoCover from "../VideoCover/VideoCover";
import Navbar from "../Navbar/Navbar";
import MainCarousel from "./MainCarousel";
import { useEffect, useRef, useState } from "react";
import "./MainPage.css";
import { resolvePath } from "react-router-dom";

function MainPage() {
  const carouselRef = useRef(null);

  const [carouselWidth, setWidth] = useState(0);
  const [videos, setVideos] = useState(0);

  const carouselHeight = 300;
  const videoCarousel = [
    {
      cover: 1,
      title: "video carousel placeholder 1",
    },
    {
      cover: 2,
      title: "video carousel placeholder 2",
    },
    {
      cover: 1,
      title: "video carousel placeholder 3",
    },
  ];
  useEffect(() => {
    setWidth(carouselRef.current.clientWidth);
    // setHeight(carouselRef.current.clientHeight);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/videodb/videos")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      //.then((res) => {console.log('res',res)})
      .then((res) => {
        setVideos(res);
        console.log("res2", res);
      });
  }, []);

  // console.log(videos);
  //console.log('videos',videos);
  let video1 = {};
  let video2 = {};
  let video3 = {};
  let video4 = {};
  let video5 = {};
  let video6 = {};
  let video7 = {};
  let video8 = {};
  let video9 = {};
  let video10 = {};
  let video11 = {};
  let video12 = {};
  let video13 = {};
  let video14 = {};

  if (videos) {
    let videosleg = videos.length;
    let videos1 = videos[videosleg - 1];
    let videos2 = videos[videosleg - 2];
    let videos3 = videos[videosleg - 3];
    let videos4 = videos[videosleg - 4];
    let videos5 = videos[videosleg - 5];
    let videos6 = videos[videosleg - 6];
    let videos7 = videos[videosleg - 7];
    let videos8 = videos[videosleg - 8];
    let videos9 = videos[videosleg - 9];
    let videos10 = videos[videosleg - 10];
    let videos11 = videos[videosleg - 11];
    let videos12 = videos[videosleg - 12];
    let videos13 = videos[videosleg - 13];
    let videos14 = videos[videosleg - 14];

    video1 = {
      url: videos1.videoAddress,
      title: videos1.videoName,
      duration: video1.videoDuration,
      views: videos1.NOC,
      cover: videos1.videoCover,
      author: videos1.publisher,
      author_id: 1,
      date: videos1.uploadTime,
      VIP:videos1.VIP,
    };
    video2 = {
      url: videos2.videoAddress,
      title: videos2.videoName,
      duration: video2.videoDuration,
      views: videos2.NOC,
      cover: videos2.videoCover,
      author: videos2.publisher,
      author_id: 1,
      date: videos2.uploadTime,
      VIP:videos2.VIP,
    };
    video3 = {
      url: videos3.videoAddress,
      title: videos3.videoName,
      duration: video3.videoDuration,
      views: videos3.NOC,
      cover: videos3.videoCover,
      author: videos3.publisher,
      author_id: 1,
      date: videos3.uploadTime,
      VIP:videos3.VIP,
    };
    video4 = {
      url: videos4.videoAddress,
      title: videos4.videoName,
      duration: video4.videoDuration,
      views: videos4.NOC,
      cover: videos4.videoCover,
      author: videos4.publisher,
      author_id: 1,
      date: videos4.uploadTime,
      VIP:videos4.VIP,
    };
    video5 = {
      url: videos5.videoAddress,
      title: videos5.videoName,
      duration: video5.videoDuration,
      views: videos5.NOC,
      cover: videos5.videoCover,
      author: videos5.publisher,
      author_id: 1,
      date: videos5.uploadTime,
      VIP:videos5.VIP,
    };
    video6 = {
      url: videos6.videoAddress,
      title: videos6.videoName,
      duration: video6.videoDuration,
      views: videos6.NOC,
      cover: videos6.videoCover,
      author: videos6.publisher,
      author_id: 1,
      date: videos6.uploadTime,
      VIP:videos6.VIP,
    };
    video7 = {
      url: videos7.videoAddress,
      title: videos7.videoName,
      duration: video7.videoDuration,
      views: videos7.NOC,
      cover: videos7.videoCover,
      author: videos7.publisher,
      author_id: 1,
      date: videos7.uploadTime,
      VIP:videos7.VIP,
    };
    video8 = {
      url: videos9.videoAddress,
      title: videos8.videoName,
      duration: video8.videoDuration,
      views: videos8.NOC,
      cover: videos8.videoCover,
      author: videos8.publisher,
      author_id: 1,
      date: videos8.uploadTime,
      VIP:videos8.VIP,
    };
    video9 = {
      url: videos9.videoAddress,
      title: videos9.videoName,
      duration: video9.videoDuration,
      views: videos9.NOC,
      cover: videos9.videoCover,
      author: videos9.publisher,
      author_id: 1,
      date: videos9.uploadTime,
      VIP:videos9.VIP,
    };
    video10 = {
      url: videos10.videoAddress,
      title: videos10.videoName,
      duration: video10.videoDuration,
      views: videos10.NOC,
      cover: videos10.videoCover,
      author: videos10.publisher,
      author_id: 1,
      date: videos10.uploadTime,
      VIP:videos10.VIP,
    };
    video11 = {
      url: videos11.videoAddress,
      title: videos11.videoName,
      duration: video11.videoDuration,
      views: videos11.NOC,
      cover: videos11.videoCover,
      author: videos11.publisher,
      author_id: 1,
      date: videos11.uploadTime,
      VIP:videos11.VIP,
    };
    video12 = {
      url: videos12.videoAddress,
      title: videos12.videoName,
      duration: video12.videoDuration,
      views: videos12.NOC,
      cover: videos12.videoCover,
      author: videos12.publisher,
      author_id: 1,
      date: videos12.uploadTime,
      VIP:videos12.VIP,
    };
    video13 = {
      url: videos13.videoAddress,
      title: videos13.videoName,
      duration: video13.videoDuration,
      views: videos13.NOC,
      cover: videos13.videoCover,
      author: videos13.publisher,
      author_id: 1,
      date: videos13.uploadTime,
      VIP:videos13.VIP,
    };
    video14 = {
      url: videos14.videoAddress,
      title: videos14.videoName,
      duration: video14.videoDuration,
      views: videos14.NOC,
      cover: videos14.videoCover,
      author: videos14.publisher,
      author_id: 1,
      date: videos14.uploadTime,
      VIP:videos14.VIP,
    };

   // console.log(video7);
  } else {
    video1 = {
      url: 1,
      title: "title",
      duration: 180,
      views: 25,
      cover: 0,
      author: "author",
      author_id: 1,
      date: "08/20",
    };
    video2 = {
      url: 1,
      title: "title",
      duration: 180,
      views: 25,
      cover: 0,
      author: "author",
      author_id: 1,
      date: "08/20",
    };
    video3 = {
      url: 1,
      title: "title",
      duration: 180,
      views: 25,
      cover: 0,
      author: "author",
      author_id: 1,
      date: "08/20",
    };
    video4 = {
      url: 1,
      title: "title",
      duration: 180,
      views: 25,
      cover: 0,
      author: "author",
      author_id: 1,
      date: "08/20",
    };
    video5 = {
      url: 1,
      title: "title",
      duration: 180,
      views: 25,
      cover: 0,
      author: "author",
      author_id: 1,
      date: "08/20",
    };
    video6 = {
      url: 1,
      title: "title",
      duration: 180,
      views: 25,
      cover: 0,
      author: "author",
      author_id: 1,
      date: "08/20",
    };

    video7 = {
      url: 1,
      title: "title",
      duration: 180,
      views: 25,
      cover: 0,
      author: "author",
      author_id: 1,
      date: "08/20",
    };
    video8 = {
      url: 1,
      title: "title",
      duration: 180,
      views: 25,
      cover: 0,
      author: "author",
      author_id: 1,
      date: "08/20",
    };
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="container" id="upperContent">
        <div className="row d-flex justify-content-center">
          <div
            className="col-sm-12 col-md-8 col-lg-6 col-xl-6"
            ref={carouselRef}
            id="carouselWrapper"
          >
            <MainCarousel
              width={carouselWidth}
              height={carouselHeight}
              videos={[video1,video2,video3]}
            ></MainCarousel>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-2 d-none d-md-block">
            <VideoCover
              videoInfo={video1}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <VideoCover
              videoInfo={video2}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <div className="d-none d-xl-block">
              <VideoCover
                videoInfo={video3}
                coverWidth={200}
                coverHeight={120}
                width={240}
              ></VideoCover>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-2 d-none d-lg-block">
            <VideoCover
              videoInfo={video4}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <VideoCover
              videoInfo={video5}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <div className="d-none d-xl-block">
              <VideoCover
                videoInfo={video6}
                coverWidth={200}
                coverHeight={120}
                width={240}
              ></VideoCover>
            </div>
          </div>
          <div
            className="col-md-4 col-lg-3 col-xl-2 d-none d-xl-block"
            id="downContent"
          >
            <VideoCover
              videoInfo={video7}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <VideoCover
              videoInfo={video8}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <div className="d-none d-xl-block">
              <VideoCover
                videoInfo={video9}
                coverWidth={200}
                coverHeight={120}
                width={240}
              ></VideoCover>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="lowerContent">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            <VideoCover
              videoInfo={video10}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <VideoCover
              videoInfo={video11}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
          </div>
          <div className="col-md-4 col-lg-3">
            <VideoCover
              videoInfo={video12}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <VideoCover
              videoInfo={video13}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
          </div>
          <div className="col-md-4 col-lg-3">
            <VideoCover
              videoInfo={video14}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <VideoCover
              videoInfo={video8}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
          </div>
          <div className="col-md-3 col-lg-3 d-none d-lg-block">
            <VideoCover
              videoInfo={video8}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <VideoCover
              videoInfo={video8}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

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

    video1 = {
      url: videos1.videoAddress,
      title: videos1.videoName,
      duration: 180,
      views: videos1.NOC,
      cover: videos1.videoCover,
      author: videos1.publisher,
      author_id: 1,
      date: videos1.uploadTime,
    };
    video2 = {
      url: videos2.videoAddress,
      title: videos2.videoName,
      duration: 180,
      views: videos2.NOC,
      cover: videos2.videoCover,
      author: videos2.publisher,
      author_id: 1,
      date: videos2.uploadTime,
    };
    video3 = {
      url: videos3.videoAddress,
      title: videos3.videoName,
      duration: 180,
      views: videos3.NOC,
      cover: videos3.videoCover,
      author: videos3.publisher,
      author_id: 1,
      date: videos3.uploadTime,
    };
    video4 = {
      url: videos4.videoAddress,
      title: videos4.videoName,
      duration: 180,
      views: videos4.NOC,
      cover: videos4.videoCover,
      author: videos4.publisher,
      author_id: 1,
      date: videos4.uploadTime,
    };
    video5 = {
      url: videos5.videoAddress,
      title: videos5.videoName,
      duration: 180,
      views: videos5.NOC,
      cover: videos5.videoCover,
      author: videos5.publisher,
      author_id: 1,
      date: videos5.uploadTime,
    };
    video6 = {
      url: videos6.videoAddress,
      title: videos6.videoName,
      duration: 180,
      views: videos6.NOC,
      cover: videos6.videoCover,
      author: videos6.publisher,
      author_id: 1,
      date: videos6.uploadTime,
    };
    video7 = {
      url: videos7.videoAddress,
      title: videos7.videoName,
      duration: 180,
      views: videos7.NOC,
      cover: videos7.videoCover,
      author: videos7.publisher,
      author_id: 1,
      date: videos7.uploadTime,
    };
    video8 = {
      url: videos1.videoAddress,
      title: videos8.videoName,
      duration: 180,
      views: videos8.NOC,
      cover: videos8.videoCover,
      author: videos8.publisher,
      author_id: 1,
      date: videos8.uploadTime,
    };

    console.log(video7);
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
              videos={videoCarousel}
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
              videoInfo={video7}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <div className="d-none d-xl-block">
              <VideoCover
                videoInfo={video7}
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
          <div className="col-md-4 col-lg-3">
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
          <div className="col-md-4 col-lg-3">
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

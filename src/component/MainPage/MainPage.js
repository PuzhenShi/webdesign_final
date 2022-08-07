import React from "react";
import VideoCover from "../VideoCover/VideoCover";
import Navbar from "../Navbar/Navbar";
import MainCarousel from "./MainCarousel";
import { useEffect, useRef, useState } from "react";
import "./MainPage.css";

function MainPage() {
  const carouselRef = useRef(null);

  const [carouselWidth, setWidth] = useState(0);
  const [carouselHeight, setHeight] = useState(0);
  useEffect(() => {
    setWidth(carouselRef.current.clientWidth);
    setHeight(carouselRef.current.clientHeight);
  }, []);
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
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div
            className="col-sm-12 col-md-8 col-lg-6 col-xl-6"
            ref={carouselRef}
          >
            <MainCarousel
              width={carouselWidth}
              height={carouselHeight}
            ></MainCarousel>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-2 d-none d-md-block">
            <VideoCover
              videoInfo={video}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <VideoCover
              videoInfo={video}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <div className="d-none d-xl-block">
              <VideoCover
                videoInfo={video}
                coverWidth={200}
                coverHeight={120}
                width={240}
              ></VideoCover>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-2 d-none d-lg-block">
            <VideoCover
              videoInfo={video}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <VideoCover
              videoInfo={video}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <div className="d-none d-xl-block">
              <VideoCover
                videoInfo={video}
                coverWidth={200}
                coverHeight={120}
                width={240}
              ></VideoCover>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-2 d-none d-xl-block">
            <VideoCover
              videoInfo={video}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <VideoCover
              videoInfo={video}
              coverWidth={200}
              coverHeight={120}
              width={240}
            ></VideoCover>
            <div className="d-none d-xl-block">
              <VideoCover
                videoInfo={video}
                coverWidth={200}
                coverHeight={120}
                width={240}
              ></VideoCover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

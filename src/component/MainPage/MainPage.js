import React from "react";
import VideoCover from "../VideoCover/VideoCover";
import Navbar from "../Navbar/Navbar";
import MainCarousel from "./MainCarousel";
import { useEffect, useRef, useState } from "react";
import "./MainPage.css";

function MainPage() {
  const carouselRef = useRef(null);

  const [carouselWidth, setWidth] = useState(0);
  const carouselHeight = 300;
  useEffect(() => {
    setWidth(carouselRef.current.clientWidth);
    // setHeight(carouselRef.current.clientHeight);
  }, []);
  const video = {
    id: 1,
    title: "title",
    duration: 180,
    views: 25,
    cover: 0,
    author: "author",
    author_id: 1,
    date: "08/20",
  };
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
          <div
            className="col-md-4 col-lg-3 col-xl-2 d-none d-xl-block"
            id="downContent"
          >
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
      <div className="container" id="lowerContent">
        <div className="row">
          <div className="col-md-4 col-lg-3">
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
          </div>
          <div className="col-md-4 col-lg-3">
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
          </div>
          <div className="col-md-4 col-lg-3">
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
          </div>
          <div className="col-md-3 col-lg-3 d-none d-lg-block">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

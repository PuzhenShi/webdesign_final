import React from "react";

function MainCarousel(props) {
  const imgWidth = 384;
  const imgHeight = 300;
  const carouselStyle = {};
 props.videos.map((video,index) =>{
  console.log(video.cover);
 })
  const videoList = props.videos.map((video, index) => {
    if (index === 0) {
      return (
        <div className="carousel-item active">
          <img src={process.env.PUBLIC_URL + '/videos/'+ video.cover} className="d-block w-100" alt="..."></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>{video.title}</h5>
          </div>
        </div>
      );
    } else {
      return (
        <div className="carousel-item">
          <img src={process.env.PUBLIC_URL + '/videos/'+ video.cover} className="d-block w-100" alt="..."></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>{video.title}</h5>
          </div>
        </div>
      );
    }
  });
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
      style={carouselStyle}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">{videoList}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default MainCarousel;

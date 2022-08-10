import React from 'react';

function Card({video}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br-100 h3 w3 dib" alt={video.name} src={process.env.PUBLIC_URL + video.imgPath} />
      <div>
        <h2>{video.videoName}</h2>
        
      </div>
    </div>
  );
}

export default Card;
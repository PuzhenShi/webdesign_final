import React from 'react';
import Card from './Card';

function SearchList({ filteredVideos }) {
  const filtered = filteredVideos.map(video => <Card key={video.videoID} video={video} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;
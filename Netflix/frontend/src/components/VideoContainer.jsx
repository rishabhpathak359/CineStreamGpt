import React from 'react';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoContainer = ({ id }) => {
  const trailerId = useMovieTrailer(id,false);

  return (
    <div className='w-full h-full'>
      {trailerId && (
        <iframe
          className="w-screen h-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&loop=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen 
        ></iframe>
      )}
    </div>
  );
};

export default VideoContainer;

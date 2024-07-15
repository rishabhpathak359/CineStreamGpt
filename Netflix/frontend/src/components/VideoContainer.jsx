import React from 'react';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoContainer = ({ id }) => {
  const trailerId = useMovieTrailer(id, false);

  return (
    <div className='w-full h-full pointer-events-none'>
      {trailerId && (
        <iframe
          className="w-[100%] h-screen aspect-square pointer-events-none"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playsinline=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen 
          frameBorder="0"
        ></iframe>
      )}
    </div>
  );
};

export default VideoContainer;

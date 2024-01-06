import React, { useEffect, useState } from 'react';
import { POSTER_CDN, options } from '../utils/constants';

const MovieCard = ({ movie }) => {
  const [trailerId, setTrailerId] = useState(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const getHoveredMovieTrailer = async (id) => {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const filteredData = data?.results?.find((video) => video.type === 'Trailer');
        if (!isCancelled && filteredData) {
          setTrailerId(filteredData.key);
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    if (hovered) {
      getHoveredMovieTrailer(movie?.id);
    } else {
      setTrailerId(null);
    }

    return () => {
      isCancelled = true;
    };
  }, [hovered, movie]);

  const imagePath = movie?.poster_path ? POSTER_CDN + movie.poster_path : '';

  return (
    <div
    className={`flex-shrink-0 hover:scale-125  transition-transform duration-300 ${
      hovered ? 'scale-125' : ''
    }`}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  >
      <img
        src={imagePath}
        alt="movie-card"
        className="w-48 h-64 object-cover rounded-md shadow-md cursor-pointer"
      />
      {hovered && trailerId && (
        <div className="absolute top-0 left-0 w-48 h-64">
          <iframe
            className="w-full h-full object-cover rounded-md shadow-md cursor-pointer"
            src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&loop=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default React.memo(MovieCard);

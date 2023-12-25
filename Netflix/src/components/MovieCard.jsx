import React, { useEffect, useState } from 'react';
import { POSTER_CDN, options } from '../utils/constants';

const MovieCard = ({ movie }) => {
  const [hovered, setHovered] = useState(false);
  const [trailerId, setTrailerId] = useState(null);

  useEffect(() => {
    if (hovered) {
      getHoveredMovieTrailer(movie?.id);
    } else {
      setTrailerId(null);
    }
  }, [hovered]);

  async function getHoveredMovieTrailer(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const filteredData = data?.results?.find((video) => video.type === 'Trailer');
      setTrailerId(filteredData?.key);
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  }

  const imagePath = movie?.poster_path ? POSTER_CDN + movie.poster_path : '';

  return (
    <div
      className={`flex-shrink-0 hover:scale-125  transition-transform duration-300 ${
        hovered ? 'scale-125' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <img
          src={imagePath}
          alt="movie-card"
          className="w-48 h-64 object-cover rounded-md shadow-md cursor-pointer"
        />
      ) : (
        <iframe
          className="w-48 h-64 object-cover rounded-md shadow-md cursor-pointer"
          src={`https://www.youtube.com/embed/${trailerId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default MovieCard;

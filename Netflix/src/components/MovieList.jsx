import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  console.log("MovieList", movies);

  const loopMovies = () => {
    const loopedMovies = [];
    const moviesLength = movies?.length;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < moviesLength; j++) {
        loopedMovies.push(movies[j]);
      }
    }

    return loopedMovies;
  };

  const loopedMovies = loopMovies();

  return (
    <div className='p-2'>
      <h1 className="text-2xl font-semibold py-6">{title}</h1>
      <div className="movie-list flex space-x-4 overflow-x-scroll">
        {loopedMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

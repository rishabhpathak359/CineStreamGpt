import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import VideoTitle from '../components/VideoTitle';
import VideoContainer from '../components/VideoContainer';
import useVideoTitle from '../hooks/useVideoTitle';
import SecondaryContainer from '../components/SecondaryContainer';
import MovieCard from '../components/MovieCard';
const Body = () => {
  useVideoTitle();
  const movies = useSelector((store) => store.movie);

  if (!movies.movie) {
    return (
      <div>
        <Header />
        <p>Loading...</p>
      </div>
    );
  }

  const randomMovie = movies.movie;
  const { original_title: title, id, overview } = randomMovie;

  return (
    <div className=''>
      <Header />
      <div className='md:block hidden'>
      <VideoTitle title={title} overview={overview} />
      <VideoContainer id={id} />
      </div>
      <div className='md:hidden  flex justify-center pt-28 '>
      <MovieCard movie={randomMovie} />
      </div>
      <SecondaryContainer />
    </div>
  );
};
export default Body;
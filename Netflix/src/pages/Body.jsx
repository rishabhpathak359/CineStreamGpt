import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import VideoTitle from '../components/VideoTitle';
import VideoContainer from '../components/VideoContainer';
import useVideoTitle from '../hooks/useVideoTitle';
import SecondaryContainer from '../components/SecondaryContainer';


const Body =  () => {
  useVideoTitle();
  const movies =  useSelector((store) => store.movie);
  
   if(movies.movie==null) return;
  const randomMovie = movies?.movie
  const title = randomMovie?.original_title;
  const id = randomMovie?.id;
  const overview = randomMovie?.overview;
  return (
    <div>
      <Header />
      {randomMovie&&
        <>
        <VideoTitle title={title} overview={overview} />
       <VideoContainer id={id} />
       <SecondaryContainer/>
        </>
      }
       
    </div>
  );
};

export default Body;

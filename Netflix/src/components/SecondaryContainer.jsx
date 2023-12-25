import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import usePopular from '../hooks/usePopular'
import useTopRated from '../hooks/useTopRated'
import useUpcoming from '../hooks/useUpcoming'
import useNowPlaying from '../hooks/useNowPlaying'

const SecondaryContainer = () => {
  usePopular();
  useTopRated();
  useUpcoming();
  useNowPlaying();
  const movies=useSelector((store)=>store.movie)
  const upcoming=movies?.upcoming;
  const topRated=movies?.topRated;
  const popular=movies?.popular;
  const nowPlaying=movies?.nowPlaying;
  console.log("Secondary Container" , movies)
  return movies &&  (
      <div className=' text-white bg-[#141414]'>
        <div className='-mt-36 relative pl-4'>
      <MovieList title={"Now Playing Movies"} movies={nowPlaying}/>
      <MovieList title={"Top Rated Movies"} movies={topRated}/>
      <MovieList title={"Popular Movies"} movies={popular}/>
      <MovieList title={"Upcoming Movies"} movies={upcoming}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
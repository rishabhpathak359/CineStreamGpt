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
  return movies &&  (
      <div className=' text-white bg-[#141414]'>
        <div className='md:-mt-36 relative pl-4'>
      <MovieList title={"Now Playing Movies"} movies={nowPlaying} infinite={true}/>
      <MovieList title={"Top Rated Movies"} movies={topRated} infinite={true}/>
      <MovieList title={"Popular Movies"} movies={popular} infinite={true}/>
      <MovieList title={"Upcoming Movies"} movies={upcoming} infinite={true}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
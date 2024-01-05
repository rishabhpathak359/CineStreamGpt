import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHoveredTrailer, addTrailer } from '../utils/movieSlice';
import { options } from '../utils/constants';

const useMovieTrailer = (id,bool) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => bool ? store.movie.hoveredTrailer : store.movie.trailer);
  const trailerId = trailer?.key;

  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

  const getData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const filteredData = data?.results?.find((video) => video.type === 'Trailer');
      if (filteredData && !bool) {
        dispatch(addTrailer(filteredData));  //if request from videocontainer then dispatching to addTrailer 
      }
      else if(filteredData && bool){
        dispatch(addHoveredTrailer(filteredData))
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  useEffect(() => {
    if (id && !trailerId) {
      getData();
    }
  }, [id, trailerId]); 

  return trailerId;
};

export default useMovieTrailer;

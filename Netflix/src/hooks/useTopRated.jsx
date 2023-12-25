import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlaying, addTopRated } from '../utils/movieSlice';
import { NOW_PLAYING_MOVIES, TOP_RATED_MOVIES, options } from '../utils/constants';

const useTopRated = () => {
  const dispatch = useDispatch();
  
  const url = TOP_RATED_MOVIES;

  const getData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      dispatch(addTopRated(data.results));
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  
  return null;
};

export default useTopRated;

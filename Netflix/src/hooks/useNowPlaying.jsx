import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlaying } from '../utils/movieSlice';
import { NOW_PLAYING_MOVIES, options } from '../utils/constants';

const useNowPlaying = () => {
  const dispatch = useDispatch();
  
  const url = NOW_PLAYING_MOVIES;

  const getData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      dispatch(addNowPlaying(data.results));
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  
  return null;
};

export default useNowPlaying;

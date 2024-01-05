import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../utils/movieSlice';
import { NOW_PLAYING_MOVIES, options } from '../utils/constants';

const useVideoTitle = () => {
  const dispatch = useDispatch();
  console.log("Videohook")
  
  const url = NOW_PLAYING_MOVIES;

  const getData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      dispatch(addMovie(data.results[Math.floor(Math.random()*20)]));
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [dispatch]);

  
  return null;
};

export default useVideoTitle;

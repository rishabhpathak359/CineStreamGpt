import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpcoming } from '../utils/movieSlice';
import { UPCOMING_MOVIES, options } from '../utils/constants';

const useUpcoming = () => {
  const dispatch = useDispatch();
  
  const url = UPCOMING_MOVIES;

  const getData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      dispatch(addUpcoming(data.results));
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  
  return null;
};

export default useUpcoming;

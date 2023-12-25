import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopular } from '../utils/movieSlice';
import { POPULAR_MOVIES, options } from '../utils/constants';

const usePopular = () => {
  const dispatch = useDispatch();
  
  const url = POPULAR_MOVIES;

  const getData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      dispatch(addPopular(data.results));
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  
  return null;
};

export default usePopular;

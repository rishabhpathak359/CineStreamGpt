import React, { useRef } from 'react';
import Header from '../components/Header';
import { options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchedMovie } from '../utils/movieSlice';
import useGptSearch from '../hooks/useGptSearch';

const MovieSuggestion = () => {
    const inputRef = useRef(null);
    const movies=useSelector((store)=>store?.movie)
    const searchedMovie=movies?.searchedMovie;
    useGptSearch(inputRef?.current?.value)
    const handleClick = () => {
       console.log(searchedMovie)
    };
    return (
        <div className="text-white bg-[#141414]">
            <Header />
            <div className="text-white bg-[#141414] w-screen h-screen flex flex-col items-center justify-center">
                <h1>Get best Movie Suggestions Based on Your Search!</h1>
                <div className='flex space-x-3'>
                    <input ref={inputRef} type='text' placeholder='Enter your movie or series' className='bg-gray-600 rounded-md p-2' />
                    <button
                        className='bg-red-600 px-8 rounded-lg'
                        onClick={handleClick}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieSuggestion;

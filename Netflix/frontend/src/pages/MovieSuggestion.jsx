import React, { useRef, useEffect, useState } from 'react';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import Lottie from 'react-lottie-player'
import search from '../assets/search.json'

const MovieSuggestion = () => {
    const inputRef = useRef(null);
    const[searchedMovie,setSearchedMovie]=useState(null);
    const [clicked,setClicked] = useState(false);
    console.log("Searched Movies", searchedMovie);

    const handleClick = async () => {
        setClicked(true);
        setSearchedMovie(null);
        const inputValue = inputRef.current.value;
        if (inputValue) {
            try {
                const response = await fetch('https://movie-api-i7pd.onrender.com/search-movies', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ inputValue: inputValue }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setSearchedMovie(data)
                    setSearchedMovie(data.results);
                } else {
                    console.error('Error:', response.statusText);
                }
            } catch (error) {
                console.error('Error sending request:', error);
            }
        }
    };

    return (
        <div className="text-white bg-[#141414]">
        <Header />
        <div className="text-white bg-[#141414] pt-60 h-screen flex flex-col  items-center justify-center">
            <h1>Get best Movie Suggestions Based on Your Search!</h1>
            <div className='flex space-x-3 mb-4'>
                <input ref={inputRef} type='text' placeholder='Enter your movie or series' className='bg-gray-600 rounded-md p-2' />
                <button
                    className='bg-red-600 px-8 rounded-lg'
                    onClick={handleClick}>
                    Search
                </button>
            </div>
            {
               clicked && !searchedMovie &&  <Lottie
                loop
                animationData={search}
                play
                style={{ width: 150, height: 150 }}
              />
            }
            <div className='movie-list max-w-screen-lg h-[50vh] mx-auto overflow-y-scroll'>
                <div className='flex flex-wrap justify-center items-center'>
                    {searchedMovie?.map((movie) => (
                        <div className='p-3'>
                        <MovieCard key={movie.id} movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
};

export default MovieSuggestion;

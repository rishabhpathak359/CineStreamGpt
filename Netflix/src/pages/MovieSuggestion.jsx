import React, { useRef, useEffect, useState } from 'react';
import Header from '../components/Header';
import { options } from '../utils/constants';
import MovieCard from '../components/MovieCard';

const MovieSuggestion = () => {
    const inputRef = useRef(null);
    const[searchedMovie,setSearchedMovie]=useState(null);
    console.log("Searched Movies", searchedMovie);

    const fetchResults = async (inputValue) => {
        try {
            const trimmedInputValue = inputValue?.trim();
    
            if (trimmedInputValue) {
                const messagePrompt = "Act as a movierecomendation app and give me 10 movie names matching my search, i am also providing an example to you. For example - if my input is Classic retro bollywood funny movies, your output should just be like 1. Golamaal, 2. Golamaal returns, 3. hera pheri, 4. dhamaal etc Note-You should only give me the name no extra messages. Here's my input - ";
                const url = `https://hercai.onrender.com/v3-beta/hercai?question=${messagePrompt}${trimmedInputValue}`;
                const res = await fetch(url);
                const data = await res.json();
                const movieNames = data.reply.split("\n");
    
                const movieDetailsPromises = movieNames.map(async (movie) => {
                    const movieNameWithoutNumbering = movie.split('. ')[1];
                    const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(movieNameWithoutNumbering ? movieNameWithoutNumbering : movie)}`;
                    const response = await fetch(movieSearchUrl, options);
                    const movieData = await response.json();
                    return movieData.results;
                });
                const moviesData = await Promise.all(movieDetailsPromises);
                const allMovies = moviesData.reduce((acc, curr) => acc.concat(curr), []);
                setSearchedMovie(allMovies);
            }
        } catch (error) {
            console.error('Error fetching results:', error);
        }
    };
    const handleClick = async () => {
        setSearchedMovie(null)
        const inputValue = inputRef.current.value;
        if (inputValue) {
            await fetchResults(inputValue);
            inputRef.current.value = '';
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

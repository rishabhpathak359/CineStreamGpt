import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../utils/constants';
import { addSearchedMovie } from '../utils/movieSlice';

const useGptSearch = (input) => {
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchResults();
    },[])
    const fetchResults = async () => {
        try {
            const messagePrompt = "Act as a movierecomendation app and give me 10 movie names matching my search, i am also providing an example to you. For example - if my input is Classic retro bollywood funny movies, your output should just be like Golamaal, Golamaal returns, hera pheri, dhamaal etc Note-You should only give me the name no extra messages. Here's my input - ";
            const url = `https://hercai.onrender.com/v3-beta/hercai?question=${messagePrompt}${input?.current?.value}`;
            const res = await fetch(url);
            const data = await res.json();

            const movieNames = data.reply.split("\n");

            const movieDetailsPromises = movieNames.map(async (movie) => {
                const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${movie}`;
                const response = await fetch(movieSearchUrl, options);
                const movieData = await response.json();
                dispatch(addSearchedMovie(movieData.results));
                // return movieData.results[0]; 
            });

            const movieDetails = await Promise.all(movieDetailsPromises);
            console.log(movieDetails);
        } catch (error) {
            console.error('Error fetching results:', error);
        }
    };
}

export default useGptSearch
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors({
  origin:["https://netflix-gpt-roan-three.vercel.app/"],
  methods:['POST','GET']
}));

app.post('/search-movies', async (req, res) => {
  const { inputValue } = req.body;

  try {
    const trimmedInputValue = inputValue.trim();
    const messagePrompt = "Act as a movierecomendation app and give me 10 movie names matching my search, i am also providing an example to you. For example - if my input is Classic retro bollywood funny movies, your output should just be like 1. Golamaal, 2. Golamaal returns, 3. hera pheri, 4. dhamaal etc Note-You should only give me the name no extra messages. Here's my input - ";

    const url = `https://hercai.onrender.com/v3-beta/hercai?question=${messagePrompt}${trimmedInputValue}`;
    const response = await fetch(url);
    const data = await response.json();

    const movieNames = data.reply.split("\n");

    const movieDetailsPromises = movieNames.map(async (movie) => {
      const movieNameWithoutNumbering = movie.split('. ')[1];
      const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(movieNameWithoutNumbering ? movieNameWithoutNumbering : movie)}`;
      const tmdbResponse = await fetch(movieSearchUrl,{
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGYzMjIxMzQxOTc4ZDg3NDRlODgzYmYzMDVjMDZmOSIsInN1YiI6IjY0N2RmZWExMGUyOWEyMmJkZmVjOTVhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qqz-bse38e8u7D6rRrVHMUMaafYOeCHqMBINk_SqLBg'
        }
    });
      const tmdbData = await tmdbResponse.json();
      return tmdbData.results;
    });

    const moviesData = await Promise.all(movieDetailsPromises);
    const allMovies = moviesData.reduce((acc, curr) => acc.concat(curr), []);

    res.json({ results: allMovies });
  } catch (error) {
    console.error('Error fetching results:', error);
    res.status(500).json({ error: 'Error fetching results' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGYzMjIxMzQxOTc4ZDg3NDRlODgzYmYzMDVjMDZmOSIsInN1YiI6IjY0N2RmZWExMGUyOWEyMmJkZmVjOTVhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qqz-bse38e8u7D6rRrVHMUMaafYOeCHqMBINk_SqLBg'
    }
}
export const POSTER_CDN='https://image.tmdb.org/t/p/w500';
export const NOW_PLAYING_MOVIES='https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const POPULAR_MOVIES='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const TOP_RATED_MOVIES='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const UPCOMING_MOVIES='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
export const FILTER_BY_SEARCH='https://api.themoviedb.org/3/search/movie&query=the+avengers';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movie: null,
  trailer:null,
  hoveredTrailer:null,
  nowPlaying:null,
  topRated:null,
  upcoming:null,
  popular:null
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie(state, action) {
      state.movie = action.payload; 
    },
    addTrailer(state,action){
        state.trailer=action.payload
    },
    addHoveredTrailer(state,action){
        state.hoveredTrailer=action.payload
    },

    addPopular(state,action){
        state.popular=action.payload
    },
    addUpcoming(state,action){
        state.upcoming=action.payload
    },
    addNowPlaying(state,action){
        state.nowPlaying=action.payload
    },
    addTopRated(state,action){
        state.topRated=action.payload
    },
    addSearchedMovie(state,action){
        state.searchedMovie=action.payload
    }
  },
});

export const { addMovie,addTrailer,addHoveredTrailer,addNowPlaying,addPopular,addTopRated,addUpcoming,addSearchedMovie } = movieSlice.actions;
export default movieSlice.reducer;

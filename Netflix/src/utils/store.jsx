import { configureStore} from '@reduxjs/toolkit'
import movieReducer from "./movieSlice"
import userReducer from "./userSlice"
export const store=configureStore({
  reducer: {
    user:userReducer,
    movie:movieReducer
  },
})
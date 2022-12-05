import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import favoritesReducer from "../reducers/favoritesReducer";
import jobsReducer from "../reducers/jobsReducer";

// configureStore will set up the Redux Store for us!

const bigReducer = combineReducers({
  // jobs: jobsReducer,
  favorites: favoritesReducer,
  searchedResults: jobsReducer,
});

/*
bigState = {
  
}
*/

const store = configureStore({
  // reducer: mainReducer,
  reducer: bigReducer,
});

export default store;

// now the store is ready! let's INJECT IT into our REACT APP!
// we do it in the src/index.js file

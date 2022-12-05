import { ADD_TO_FAVORITES } from "../actions";
import { REMOVE_FROM_FAVORITES } from "../actions";

const initialState = {
  jobs: {
    favorites: [], // we're going to put our favourite jobs here!
  },

  searchedJobs: {
    results: [],
  },
};

const mainReducer = (state = initialState, action) => {
  // the goal of the reducer function is ALWAYS to RETURN the NEW STATE
  // of the application
  switch (action.type) {
    // multiple cases are going to be happening here, with time!
    // but now, just for starting, let's write just the default
    // so we can conclude this function and finish our store/index.js

    case ADD_TO_FAVORITES:
      return {
        ...state,
        jobs: {
          ...state.jobs,
          favorites: [...state.jobs.favorites, action.payload],
        },
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        jobs: {
          ...state.jobs,
          favorites: state.jobs.favorites.filter((job, index) => {
            if (index !== action.payload) return job;
          }),
        },
      };

    // state.cart.content.filter((book, i) => {
    //   return i !== action.payload

    // things you can use: spread operator, slice, filter, concat etc.
    // things you CANNOT use: push, splice, etc.

    default:
      return state;
  }
};

export default mainReducer;

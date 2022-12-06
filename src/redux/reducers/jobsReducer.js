import { GET_JOBS, IS_LOADING_JOBS, IS_ERROR_JOBS } from "../actions";

const initialState = {
  // we're already in the "jobs" slice of the Redux store
  // stock: [],

  // searchedJobs: {
  //   results: [],
  // },

  results: [],
  isLoading: true,
  isError: false,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        // searchedJobs: {
        results: action.payload,
        // },
      };

    case IS_LOADING_JOBS:
      return {
        ...state,
        isLoading: action.payload,
      };

    case IS_ERROR_JOBS:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default jobsReducer;

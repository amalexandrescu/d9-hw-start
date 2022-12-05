import { GET_JOBS } from "../actions";

const initialState = {
  // we're already in the "jobs" slice of the Redux store
  // stock: [],

  // searchedJobs: {
  //   results: [],
  // },

  results: [],
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

    default:
      return state;
  }
};

export default jobsReducer;

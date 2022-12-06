export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const GET_JOBS = "GET_JOBS";
export const IS_LOADING_JOBS = "IS_LOADING_JOBS";
export const IS_ERROR_JOBS = "IS_ERROR_JOBS";

export const addToFavoritesAction = (data) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: data,
  };
};

export const removeFromFavoritesAction = (i) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: i,
  };
};

// this async action creator is now going to be in charge of fetching the jobs
// and putting them into the stock array into the jobs slice of the Redux Store

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    console.log("Fetching the jobs from the API...");
    try {
      let resp = await fetch(baseEndpoint + query + "&limit=20");
      if (resp.ok) {
        console.log(query);
        let { data } = await resp.json();
        //{data:[]}
        dispatch({
          type: GET_JOBS,
          payload: data, // the reducer is just being given
          // the final result, the array of jobs! so it cannot fail :)
        });

        dispatch({
          type: IS_LOADING_JOBS,
          payload: false,
        });
      } else {
        console.log("error");
        dispatch({
          type: IS_LOADING_JOBS,
          payload: false,
        });

        dispatch({
          type: IS_ERROR_JOBS,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: IS_LOADING_JOBS,
        payload: false,
      });

      dispatch({
        type: IS_ERROR_JOBS,
        payload: true,
      });
    }
  };
};

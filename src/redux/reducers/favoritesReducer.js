import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions";

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  // const newFunct = (payload) => {
  //   let includes = false;
  //   for (let i = 0; i < state.favorites.length; i++) {
  //     if (state.favorites.favorites[i].id === payload.id) {
  //       includes = true;
  //       break;
  //     }
  //   }
  //   return includes;
  // };

  // if (action.type === ADD_TO_FAVORITES && newFunct(action.payload))
  //   return state;

  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,

        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,

        favorites: state.favorites.filter((job, index) => {
          if (index !== action.payload) return job;
        }),
      };

    default:
      return state;
  }
};

export default favoritesReducer;

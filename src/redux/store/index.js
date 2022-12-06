import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import favoritesReducer from "../reducers/favoritesReducer";
import jobsReducer from "../reducers/jobsReducer";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

// configureStore will set up the Redux Store for us!

const bigReducer = combineReducers({
  // jobs: jobsReducer,
  favorites: favoritesReducer,
  searchedResults: jobsReducer,
});

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, bigReducer);

// const store = configureStore({
//   // reducer: mainReducer,
//   reducer: bigReducer,
// });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);

// export default store;

// now the store is ready! let's INJECT IT into our REACT APP!
// we do it in the src/index.js file

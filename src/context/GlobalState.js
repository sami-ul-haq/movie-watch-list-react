import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

// Initial State
const initialState = {
  watchList: [],
  watched: [],
};

// create Context

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const addMovieToWatchlist = (movie) => {
    console.log("1");
    dispatch({ type: "ADD_MOVIE_TO_WATCH_LIST", payload: movie });
  };

  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    console.log("2");
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchList,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

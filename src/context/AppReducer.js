export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCH_LIST":
      console.log("Added");
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };

    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };

    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchList: [action.payload, ...state.watchList],
      };

    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };

    default:
      return state;
  }
};

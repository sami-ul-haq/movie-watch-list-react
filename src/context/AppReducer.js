export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCH_LIST":
      console.log("Added");
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };

    case "ADD_MOVIE_TO_WATCHED":
      console.log("Removed");
      return state;

    default:
      return state;
  }
};

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchList,
    watched,
  } = useContext(GlobalContext);

  let storedMovie = watchList.find((mov) => mov.id === movie.id);
  let storedMovieWatched = watched.find((mov) => mov.id === movie.id);

  const watchListDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">{movie.release_date}</h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchListDisabled}
            onClick={() => {
              addMovieToWatchlist(movie);
              console.log("action added");
            }}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => {
              addMovieToWatched(movie);
              console.log("action watched");
            }}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

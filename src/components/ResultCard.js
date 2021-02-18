import React, { useContext } from "react";
// import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched } = useContext(GlobalContext);

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
          <h4 className="release-date">
            {/* <Moment format="YYYY">{movie.release_date}</Moment> */}
            {movie.release_date}
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            // disabled={watchlistDisabled}
            onClick={() => {
              addMovieToWatchlist(movie);
              console.log("action added");
            }}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            // disabled={watchedDisabled}
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

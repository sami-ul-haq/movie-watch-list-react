import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

const Add = () => {
  const TMDB_KEY = "afcc4e756d500720208345094fe13a77";

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const changeHandler = (e) => {
    e.preventDefault();

    let keyword = e.target.value;

    setQuery(keyword);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={changeHandler}
              placeholder="Search For Movie.."
            />
          </div>

          {results && (
            <ul className="results">
              {results.map((movie, index) => (
                <li key={index}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;

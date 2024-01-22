import { useEffect, useState } from "react";
import { Result } from "../props/MovieInterface";
import { fetchPopularMovies } from "../network/PopularApiRequest";
import React from "react";

export const PopularMoviesScreen = () => {
  const [movies, setMovies] = useState<Result[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchPopularMovies();
      setMovies(moviesData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h2 className="lato-regular">Popular Movies</h2>
        <ul>
          {movies.map((movie) => (
            <React.Fragment key={movie.id}>
              <li className="lato-bold">{movie.title}</li>
              <img className="img"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
              <p className="lato-regular">{movie.overview}</p>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};

import React, { useEffect, useState } from 'react'
import { TopRatedRequest } from '../network/TopRatedRequest';
import { Result } from '../props/MovieInterface';

export const TopRatedScreen = () => {
  const [movies, setMovies] = useState<Result[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await TopRatedRequest();
      setMovies(moviesData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h2 className="lato-regular">Top Rated Movies</h2>
        <ul>
          {movies.map((movie) => (
            <React.Fragment key={movie.id}>
              <li className="lato-bold">{movie.title}</li>
              <img
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
}

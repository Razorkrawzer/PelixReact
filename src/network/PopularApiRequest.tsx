import { Result } from "../props/MovieInterface";

const token = process.env.REACT_APP_TMDB_TOKEN;

export const fetchPopularMovies = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );

    if (response.ok) {
      const data: { results: Result[] } = await response.json();

      return data.results;
    } else {
      console.error("Error getting movies:", response.status);
      return [];
    }
  } catch (error) {
    console.error("Network error:", error);
    return [];
  }
};

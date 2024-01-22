import { Result } from "../props/MovieInterface";

export const TopRatedRequest = async () => {
    try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjY3NjU1NzM0ZTc1YWY3MzAxOWQ2NDk5NGIyMjg0ZCIsInN1YiI6IjViYWJlOWY0YzNhMzY4M2FjMDAyY2NlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I21ZnBFTLqVCHaD87tJTl40jKpm_Y7HgH-ImIezh7lM",
          },
        };
    
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
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
}

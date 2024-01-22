import { Link } from "react-router-dom";

export const MainScreen = () => {
  return (
    <>
      <Link to="/popular-movies">Popular</Link>

      <Link to="/top-rated">Top Rated</Link>
    </>
  );
};

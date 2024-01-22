import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainScreen } from "./screens/MainScreen";
import { PopularMoviesScreen } from "./screens/PopularMoviesScreen";
import { TopRatedScreen } from "./screens/TopRatedScreen";

function App() {
  return (
    <>
    <header>
      <h1 className="lato-bold">Pelix</h1>
    </header>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/popular-movies" element={<PopularMoviesScreen />} />
          <Route path="/top-rated" element={<TopRatedScreen />} />
        </Routes>
      </BrowserRouter>
    
    </>
      
 
  );
}

export default App;

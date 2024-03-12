
import Navbar from "./COMPONENTS/Navbar";

import Movie from "./COMPONENTS/Movie";

function App() {
  return (
    <div>
        <Navbar/>
        <Movie Name="TRENDING MOVIES" url="https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=32f9e877489c276a3376f21bd753a432"/>
        <Movie Name="ACTION MOVIES" url="https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=32f9e877489c276a3376f21bd753a432"/>
        <Movie Name="COMEDY MOVIES" url="https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=32f9e877489c276a3376f21bd753a432"/>
        <Movie Name="ROMANCE MOVIES" url="https://api.themoviedb.org/3/discover/movie?with_genres=10749&api_key=32f9e877489c276a3376f21bd753a432"/>
        <Movie Name="HORROR MOVIES" url="https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=32f9e877489c276a3376f21bd753a432"/>
        {/* <TrendingMovies/>
        <Action/>
        <Comnedy/>
        <Romace/>
        <Horror/> */}
    </div>
  );
}

export default App;

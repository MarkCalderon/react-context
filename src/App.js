import './App.scss';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import {MovieProvider} from './components/MovieContext'

function App() {
  return (
    <MovieProvider>
      <main className="App">
          <Nav />
          <MovieList />
      </main>
    </MovieProvider>
  );
}

export default App;

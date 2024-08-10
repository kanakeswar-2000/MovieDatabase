import './App.css'

// write your code here
import {Switch, Route} from 'react-router-dom'
import PopularMoviesPage from './Components/PopularMoviesPage'
import SearchedMoviesPage from './Components/SearchedMoviesPage'
import TopRatedMoviesPage from './Components/TopRatedMoviesPage'
import SingleMovieDetailsPage from './Components/SingleMovieDetailsPage'
import UpcomingMoviesPage from './Components/UpcomingMoviesPage'

import Header from './Components/Header'
const App = () => (
  <div className="app-container">
    <Header />
    <Switch>
      <Route exact path="/" component={PopularMoviesPage} />
      <Route exact path="/top-rated" component={TopRatedMoviesPage} />
      <Route exact path="/upcoming" component={UpcomingMoviesPage} />
      <Route exact path="/search" component={SearchedMoviesPage} />
    </Switch>
  </div>
)

export default App

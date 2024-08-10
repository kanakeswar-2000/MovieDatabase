import './index.css'
import {Component} from 'react'
import EachPoster from '../EachPoster'
class PopularMoviesPage extends Component {
  state = {
    movieslist: [],
  }
  componentDidMount() {
    this.getMoviesData()
  }
  getMoviesData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=ac116e4cc4bc7630fbd0f390a00f6007&language=en-US&page=1',
    )
    const data = await response.json()
    if (response.ok === true) {
      const fetchedData = data.results.map(eachitem => {
        return {
          id: eachitem.id,
          title: eachitem.title,
          voteAverage: eachitem.vote_average,
          posterPath: eachitem.poster_path,
        }
      })

      this.setState({movieslist: fetchedData})
    }
  }
  render() {
    const {movieslist} = this.state

    return (
      <div>
        <h1>Popular</h1>
        <ul className="posters-container">
          {movieslist.map(item => {
            const image_url =
              'https://image.tmdb.org/t/p/w500' + item.posterPath
            return (
              <EachPoster
                key={item.id}
                posterDetails={item}
                imageUrl={image_url}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default PopularMoviesPage

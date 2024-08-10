import './index.css'
import {Link} from 'react-router-dom'
 
import {Component} from 'react'
class Header extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  
  render() {
    const {searchInput} = this.state
    return (
      <div className="navbar-container">
        <h1>movieDB</h1>
        <ul className="links-container">
          <Link to="/">
            <li>Popular</li>
          </Link>
          <Link to="/top-rated">
            <li>Top Rated</li>
          </Link>
          <Link to="/upcoming">
            <li>Upcoming</li>
          </Link>
        </ul>
        <div>
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <button type="button" onClick={this.onClickSearchButton}>
            Search
          </button>
        </div>
      </div>
    )
  }
}
export default Header

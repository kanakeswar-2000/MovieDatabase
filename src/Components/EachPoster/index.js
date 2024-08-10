import './index.css'

const EachPoster = props => {
  const {posterDetails, imageUrl} = props
  const {title, voteAverage} = posterDetails
  return (
    <li className="each-poster">
      <img className="image" src={imageUrl} />
      <p>{title}</p>
      <p>{voteAverage}</p>
      <button>View Details</button>
    </li>
  )
}
export default EachPoster

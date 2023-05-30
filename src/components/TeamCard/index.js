// Write your code here

import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <Link to={`/team-matches/${id}`} style={{textDecoration: 'none'}}>
      <li className="card-container">
        <img src={teamImageUrl} alt={name} className="card-image-name" />
        <p className="card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

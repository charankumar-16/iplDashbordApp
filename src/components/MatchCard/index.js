import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {
    result,

    competingTeam,
    competingTeamLogo,

    matchStatus,
  } = eachMatch

  return (
    <li className="recent-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-match-logo"
      />
      <p className="recent">{competingTeam}</p>
      <p className="recent"> {result}</p>
      <p className={`recent ${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

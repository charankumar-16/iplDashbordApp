// Write your code here
import './index.css'

const LatestMatch = prop => {
  const {latestMatch} = prop
  console.log(latestMatch)
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch

  return (
    <div className="latest-match-bg-container">
      <div className="first">
        <p className="competing-team">{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="second">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <div className="third">
        <p className="head">First Innings</p>
        <p className="ans">{firstInnings}</p>
        <p className="head">Second Innings</p>
        <p className="ans">{secondInnings}</p>
        <p className="head">Man Of The Match</p>
        <p className="ans">{manOfTheMatch}</p>
        <p className="head">Umpires</p>
        <p className="ans">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

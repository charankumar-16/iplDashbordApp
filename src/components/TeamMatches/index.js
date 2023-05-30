// Write your code here
import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatingData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatingData

    const updatedLatestMatch = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const updatedRecentMatch = recentMatches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))
    this.setState({
      teamBannerUrl,
      latestMatchDetails: updatedLatestMatch,
      recentMatches: updatedRecentMatch,
      isLoading: true,
    })
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading,
    } = this.state

    return (
      <div className={`bg-container ${id}`}>
        {!isLoading ? (
          <div data-testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            {' '}
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <div className="latest-match-container">
              <p className="latest-title">Latest Matches</p>
              <LatestMatch latestMatch={latestMatchDetails} />
              <ul className="recent-matches-container">
                {recentMatches.map(eachMatch => (
                  <MatchCard key={eachMatch.id} eachMatch={eachMatch} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches

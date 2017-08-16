import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TeamPlayer from './TeamPlayer'
import { getTeam } from '../actions/team'

class Team extends React.Component {

  componentDidMount() {
    this.props.dispatch(getTeam())
  }
  render() {
    const { team } = this.props
    const renderTeamItem = (player, key) => <TeamPlayer player={player} key={key} />
    const renderTeam = () => team.map(renderTeamItem)
    return (
      <div className="team">
        { renderTeam() }
      </div>
    )
  }
}

function mapStateToProps ({ team }, props) {
  if (props.team) {team = props.team}
  return { team }
}

export default connect(mapStateToProps)(Team)

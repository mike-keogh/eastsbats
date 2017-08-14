import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getTeam } from '../actions/team'

class Team extends React.Component {

  componentDidMount() {
    this.props.dispatch(getTeam())
  }
  render() {
     const { team } = this.props
    const renderTeamItem = (player, key) => (<Link to={'/team/profile/' + player.id}  key={key}><h4>{player.name}</h4></Link>)
    const renderTeam = () => team.map(renderTeamItem)
    return (
      <div className="team">
        {renderTeam()}
      </div>
    )
  }
}

function mapStateToProps ({team}) {
  return {team}
}

export default connect(mapStateToProps)(Team)

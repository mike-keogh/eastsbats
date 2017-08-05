import React from 'react'
import {Link} from 'react-router-dom'

export default function Team ({team, selectPlayerById}) {
  const renderTeamItem = (player, key) => (<Link to={'/team/profile/' + player.id}  key={key}><h4>{player.name}</h4></Link>)
  const renderTeam = () => team.map(renderTeamItem)

  return (
    <div className="team">
      {renderTeam(team)}
    </div>
  )
}

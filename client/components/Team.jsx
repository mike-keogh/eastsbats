import React from 'react'

export default function Team ({team, selectPlayerById}) {
  const renderTeamItem = (player, key) => (<a href="#" onClick={(e) => selectPlayerById(player)} key={key}><h4>{player.name}</h4></a>)
  const renderTeam = () => team.map(renderTeamItem)

  return (
    <div className="team">
      {renderTeam(team)}
    </div>
  )
}

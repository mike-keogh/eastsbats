import React from 'react'

export default function Team ({team}) {
  const renderTeamItem = (player, key) => (<h4 key={key}>{player.name}</h4>)
  const renderTeam = () => team.map(renderTeamItem)

  return (
    <div className="team">
      <div>{renderTeam()}</div>
    </div>
  )
}

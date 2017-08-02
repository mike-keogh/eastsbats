import React from 'react'
import TeamPlayer from './TeamPlayer'

export default function Team ({team}) {
  const renderTeamItem = (player, key) => (
    <TeamPlayer player={player} key={key} />
  )

  return (
    <div className="team">
      {team.map(renderTeamItem)}
    </div>
  )
}

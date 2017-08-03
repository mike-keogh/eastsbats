import React from 'react'

export default function Team ({team}) {
  const renderTeamItem = (player, key) => (<a href="#" onClick={this.props.showPlayer} key={key}><h4>{player.name}</h4></a>)
  const renderTeam = () => team.map(renderTeamItem)

  return (
    <div className="team">

        {renderTeam()}

    </div>
  )
}

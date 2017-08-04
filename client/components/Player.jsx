import React from 'react'

export default function Player({player}) {

  return (
    <div>
      <ul>
        <li>{player.name}</li>
        <li>{player.age}</li>
        <li>{player.batting_style}</li>
        <li>{player.bowling_average}</li>
        <li>{player.batting_runs}</li>
      </ul>
    </div>
  )
}

import React from 'react'

export default function PlayerBowlingStats ({bowling}) {
  return (
    bowling ?
      <div className="bowlingStats">
        <h4 className="bowlingStats">Bowling Statistics</h4>
        <ul>
          <li>Overs: {bowling.overs}</li>
          <li>Maidens: {bowling.maidens}</li>
          <li>Runs: {bowling.runs}</li>
          <li>Wickets: {bowling.wickets}</li>
          <li>Average: {bowling.average}</li>
        </ul>
      </div>

    : <p>This player has no bowling stats</p>


  )
}

import React from 'react'

export default function PlayerBattingStats ({batting}) {
  return batting
    ? <div className='battingStats'>
        <h3>Batting Statistics:</h3>
        <ul>
          <li>Innings: {batting.innings}</li>
          <li>Runs: {batting.runs}</li>
          <li>Average: {batting.average}</li>
          <li>Not Out: {batting.no}</li>
        </ul>
      </div>
    : <p>This player has no Batting stats</p>
}

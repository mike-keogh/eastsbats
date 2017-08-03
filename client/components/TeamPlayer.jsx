import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

export default function TeamPlayer ({player}) {
  return (
    <div className="TeamPlayer">
      <h1>{player.name}</h1>
    </div>
  )
}

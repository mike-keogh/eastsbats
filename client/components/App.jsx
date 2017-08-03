import React from 'react'
import {getTeam} from '../api'
import Team from './Team'
import Nav from './Nav'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      err: null,
      team: []
    }
  }
  // This didMount function will make a request upon load, rather than waiting for a button click

  componentDidMount() {
    this.refreshTeamData()
  }
  saveTeam(err, team) {
    this.setState({err, team: team || []})
  }
  refreshTeamData() {
    getTeam(this.saveTeam.bind(this))
  }
  render() {
    let {err, team} = this.state

    return (
      <div>
        <Nav />
        Hello
        <h1>{err}</h1>
        <Team team={team} />
      </div>
    )
  }
}

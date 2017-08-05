import React from 'react'
import {getTeam} from '../api'
import {Link, HashRouter as Router, Route} from 'react-router-dom'
import Team from './Team'
import Nav from './Nav'
import Player from './Player'
import PlayerStats from './PlayerStats'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      err: null,
      team: []
    }
  }

  componentWillMount() {
    this.refreshTeamData()
  }

  saveTeam(err, team) {
    this.setState({err, team: team || []})
  }

  refreshTeamData() {
    getTeam(this.saveTeam.bind(this))
  }

  render() {
    let {err, team, showPlayer, showVisible} = this.state
    return (
      <div>
        <Router>
          <div>
            <Route path="/" component={Nav} />
            <Route path="/team/" component=
              {(props) => <Team team={team} />}
            />
            <Route path="/team/profile/:id" component={Player} />
            <Route path="/team/profile/:id/stats" component={PlayerStats} />
          </div>
        </Router>
      </div>
    )
  }
}

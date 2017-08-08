import React from 'react'
import {Link, HashRouter as Router, Route} from 'react-router-dom'

import {getTeam} from '../api'
import Team from './Team'
import Nav from './Nav'
import Player from './Player'
import PlayerStats from './PlayerStats'
import Images from './Images'
import Home from './Home'
import Report from './Report'

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
    let {err, team} = this.state
    return (
      <div className="container">
        <h1>The Bats</h1>
        <Router>
          <div>
            <Route path="/" component={Nav} />
            <Route exact path="/" component={Home} />
            <Route path="/images" component={Images} />
            <Route path="/report" component={Report} />
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

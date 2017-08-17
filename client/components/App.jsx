import React from 'react'
import { Link, HashRouter as Router, Route } from 'react-router-dom'

import Team from './Team'
import Nav from './Nav'
import Player from './Player'
import Images from './Images'
import Home from './Home'
import Report from './Report'
import Registration from './Registration'
import NewGame from './NewGame'
import PlayerBattingStats from './PlayerBattingStats'
import PlayerBowlingStats from './PlayerBowlingStats'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  // componentWillMount() {

  // }
  render() {
    let {err} = this.state
    return (
      <div className="container">
        <h1>The Bats</h1>
        <Router>
          <div>
            <Route path="/" component={Nav} />
            <Route exact path="/" component={Home} />
            <Route path="/images" component={Images} />
            <Route path="/report" component={Report} />
            <Route path="/registration" component={Registration} />
            <Route path="/team/" component={Team }/>
            <Route path="/team/profile/:id" component={Player} />
            <Route path="/team/profile/:id/battingstats" component={PlayerBattingStats} />
            <Route path="/team/profile/:id/bowlingstats" component={PlayerBowlingStats} />
            <Route path="/games" component={NewGame}/>
          </div>
        </Router>
      </div>
    )
  }
}

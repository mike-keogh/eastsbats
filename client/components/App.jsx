import React from 'react'
import {getTeam, getPlayerProfile} from '../api'
import Team from './Team'
import Nav from './Nav'
import Player from './Player'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      err: null,
      team: [],
      showVisible: false,
      showPlayer: null
    }
  }

  componentDidMount() {
    this.refreshTeamData()
  }

  saveTeam(err, team) {
    this.setState({err, team: team || []})
  }

  refreshTeamData() {
    getTeam(this.saveTeam.bind(this))
  }

  toggleShowTeam() {
    this.setState(
      {showVisible: !this.state.showVisible}
    )
  }

  selectPlayerById(player) {
    console.log(player)
    // getPlayerProfile('id')
    this.setState(
      {showPlayer: player}
    )
  }

  render() {
    let {err, team, showPlayer, showVisible} = this.state
    return (
      <div>
        <Nav toggleShowTeam={this.toggleShowTeam.bind(this)} />

        {showVisible && <Team team={team} selectPlayerById={this.selectPlayerById.bind(this)}  />}

        {showPlayer && <Player player={this.state.showPlayer} />}
      </div>
    )
  }
}

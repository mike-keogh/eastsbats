import React from 'react'
import {getTeam} from '../api'
import Team from './Team'
import Nav from './Nav'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      err: null,
      team: [],
      showVisible: false,
      showPlayer: false
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
  selectPlayer() {
    this.setState(
      {showPlayer: !this.state.showPlayer}
    )
  }


  render() {
    let {err, team} = this.state

    return (
      <div>
        <Nav toggleShowTeam={this.toggleShowTeam.bind(this)} />
        <h1>{err}</h1>
        {this.state.showVisible && <Team team={team} />}
      </div>
    )
  }
}

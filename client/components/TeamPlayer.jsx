import React from 'react'
import {connect, dispatch} from 'react-redux'
import {Link} from 'react-router-dom'

import { getTeam } from '../actions/team'
import { deletePlayerRequest } from '../actions/team'

class TeamPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      player: props.player
    }
  }
  hoverOn () {
    this.setState({hover: true})
  }
  hoverOff () {
    setTimeout(() => this.setState({hover:false}), 750)
  }
  render() {
    let {player} = this.props
    return (
      <div
        onMouseEnter={this.hoverOn.bind(this)}
        onMouseLeave={this.hoverOff.bind(this)}>
        <h4>
        <Link to={'/team/profile/' + player.id}  replace>
          {player.name}
        </Link>
        {' _ ' }
        {this.state.hover &&

          <button style={{cursor: 'no-drop'}} onClick={() => this.props.dispatch(deletePlayerRequest(player))}> ✗</button>
        }
        </h4>
      </div>
    )
  }
}

export default connect()(TeamPlayer)

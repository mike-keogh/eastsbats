import React from 'react'
import {connect, dispatch} from 'react-redux'
import {Link} from 'react-router-dom'

import { deletePlayerRequest } from '../actions/deletePlayer'

class TeamPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      player: props.player
    }
  }

  componentWillReceiveProps ({player}) {
    this.setState({
      player: player
    })
  }

  hoverOn () {
    this.setState({hover: true})
  }
  hoverOff () {
    setTimeout(() => this.setState({hover:false}), 500)
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

        </h4>
        {this.state.hover && <div>
          <h6>{player.nickname}</h6>
          <a style={{cursor: 'no-drop'}} onClick={() => this.props.dispatch(deletePlayerRequest(player))}> ✗</a>

        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (props, state) => {
  return {
    player: state.player
  }
}

export default connect(mapStateToProps)(TeamPlayer)

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class TeamPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }
  hoverOn() {
    this.setState({hover: true})
  }
  hoverOff() {
    setTimeout(() => this.setState({hover:false}), 500)

  }
  render() {
    let {player} = this.props
    console.log({player});
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
          <a style={{cursor: 'no-drop'}}> ✗</a>

        </div>
        }
      </div>
    )
  }
}

export default connect()(TeamPlayer)

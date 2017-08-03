import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'
import Team from './Team'

export default class Nav extends React.Component {




  render() {
    return (
      <div className='navBar'>
        <h3>Home</h3>
        <h3><a href="#" onClick={this.props.toggleShowTeam}>Team</a></h3>



      </div>
    )
  }
}

import React from 'react'
import {Link} from 'react-router-dom'
export default class Nav extends React.Component {

  render() {
    return (
      <div className='navBar'>
        <div className='homeNave'><Link to="/" replace>Home</Link></div>
        <div className='teamNav'><Link to="/team" replace>Team</Link></div>
        <div className='reportNav'><Link to="/report" replace>Season Report</Link></div>
        <div className='newPlayerNav'><Link to="/registration" replace>Registration</Link></div>
        <div className='newGameNav'><Link to="/newGame" replace>New Game</Link></div>
        <div className='imagesNav'><Link to="/images" replace>Images</Link></div>
      </div>
    )
  }
}

import React from 'react'
import {Link} from 'react-router-dom'
export default class Nav extends React.Component {

  render() {
    return (
      <div className='navBar'>
        <div className='homeNave'><Link to="/">Home</Link></div>
        <div className='teamNav'><Link to="/team">Team</Link></div>
        <div className='reportNav'><Link to="/report">Season Report</Link></div>
        <div className='imagesNav'><Link to="/images">Images</Link></div>
      </div>
    )
  }
}

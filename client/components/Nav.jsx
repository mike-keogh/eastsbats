import React from 'react'
import {Link} from 'react-router-dom'
export default class Nav extends React.Component {

  render() {
    return (
      <div className='navBar'>
        <h3><Link to="/">Home</Link></h3>
        <h3><Link to="/team">Team</Link></h3>
      </div>
    )
  }
}

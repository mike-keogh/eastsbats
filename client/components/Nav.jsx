import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teamInfo: []
    }
  }

  render() {
    return (
      <div className='navBar'>
        <p>This will be the navbar</p>
      </div>
    )
  }
}

import React from 'react'

export default class Registration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newPlayer: []
    }
  }

  render() {
    return (
      <div className="addNewPlayer">
        <form name="newPlayer" >

        </form>
      </div>
    )
  }
}

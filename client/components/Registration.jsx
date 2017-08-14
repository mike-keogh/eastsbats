import React from 'react'

export default class Registration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newPlayer: {}
    }
  }

  newPlayerDetails (e) {
    const newPlayer = this.state.newPlayer
    this.setState({
      newPlayer: newPlayer
    })
    newPlayer[e.target.name] = e.target.value
  }

  submitPlayer (e) {
    e.preventDefault()
    // post to the database
  }

  render() {
    return (

      <form className="addNewPlayer" onSubmit={this.submitPlayer.bind(this)}>
        <input name="name" placeholder="name" type="text" onChange={this.newPlayerDetails.bind(this)}/><br/>
        <input name="born" placeholder="born" type="text" onChange={this.newPlayerDetails.bind(this)}/><br/>
        <input name="age" placeholder="age" type="text" onChange={this.newPlayerDetails.bind(this)}/><br/>
        <input name="teams" placeholder="Major Teams" type="text" onChange={this.newPlayerDetails.bind(this)}/><br/>
        <input name="playing_role" placeholder="Playing Role" type="text" onChange={this.newPlayerDetails.bind(this)}/><br/>
        <select name="batting_style" onChange={this.newPlayerDetails.bind(this)}>
          <option selected disabled>Batting Style</option>
          <option>Right-hand Bat</option>
          <option>Left-hand Bat</option>
        </select><br/>
        <input name="bowling_style" placeholder="Bowling Style" type="text" onChange={this.newPlayerDetails.bind(this)}/><br/>
        <input type="submit" />
      </form>
    )
  }
}

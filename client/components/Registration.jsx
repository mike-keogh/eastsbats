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
        <form >
        <input name="name" placeholder="name" type="text"/><br/>
        <input name="born" placeholder="born" type="text" /><br/>
        <input name="age" placeholder="age" type="text" /><br/>
        <input name="teams" placeholder="Major Teams" type="text" /><br/>
        <input name="playing_role" placeholder="Playing Role" type="text" /><br/>
        <select name="batting_style">
          <option selected disabled>Batting Style</option>
          <option>Right-hand Bat</option>
          <option>Left-hand Bat</option>
        </select><br/>

        <input name="bowling_style" placeholder="Bowling Style" type="text" /><br/>
        <input type="submit" />

      </form>

      </div>
    )
  }
}

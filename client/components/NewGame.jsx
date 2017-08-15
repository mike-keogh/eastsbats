import React from 'react'


class NewGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newGame: {}
    }
  }

  newGameDetails (e) {
    const newGame = this.state.newGame
    this.setState({
      newGame: newGame
    })
    newGame[e.target.name] = e.target.value
    console.log(newGame);
  }

  onSubmit (e) {
    e.preventDefault()
    
  }



  render() {
    return (
      <div className='newGameComp'>
      <h4></h4>
        <form className='newGameComp'>
          <input type='text' placeholder='opponent' name='opponent' onChange={this.newGameDetails.bind(this)}/>
          <input type='text' placeholder='location' name='location' onChange={this.newGameDetails.bind(this)}/>
          <input type='text' placeholder='season' name='season' onChange={this.newGameDetails.bind(this)}/>
          <input type='text' placeholder='date' name='date' onChange={this.newGameDetails.bind(this)}/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default NewGame

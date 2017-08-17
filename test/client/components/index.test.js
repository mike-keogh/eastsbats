import React from 'react'
import test from 'ava'
import { shallow, mount, render } from 'enzyme'
import jsdom from 'jsdom'
import sinon from 'sinon'
import { Provider } from 'react-redux'

import App from '../../../client/components/App'
import Team from '../../../client/components/Team'
import Images from '../../../client/components/Images'
import Home from '../../../client/components/Home'
import Report from '../../../client/components/Report'
import NewGame from '../../../client/components/NewGame'
import Player from '../../../client/components/Player'

import '../setup-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import store from '../../../client/store'

test('<App /> has correct title', t => {
  const expected = 'The Bats'
  const wrapper = shallow(<App />)
  t.is(wrapper.find('h1').text(), expected)
})

test('<Images /> has proper number of img tags', t => {
  const wrapper = shallow(<Images />)
  t.is(wrapper.find('img').length, 5)
})

test('<Home /> contains an a tag', t => {
  const wrapper = shallow(<Home />)
  t.is(wrapper.find('a').exists(), true)
})

test('<Report /> contains p tag', t => {
  const wrapper = shallow(<Report />)
  t.is(wrapper.find('p').exists(), true)
})

test('<Team /> contains all players of the team', t => {
  Team.WrappedComponent.prototype.componentDidMount = () => {}
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <Team team={[{name: 'Felix'}]}/>
      </Router>
    </Provider>)
  console.log(wrapper.text())
  t.is(wrapper.find('h4').length, 1)
})

test('<Player /> contains player info', t => {
  Player.prototype.componentWillMount = () => {}
  const wrapper = mount(
        <Player match={{params: {id: 1}}} />
  )
  wrapper.setState({player: {age: 22}})
  t.is(wrapper.find('li').length, 7)
})

test('<Player /> renders a child component with button click', t=> {
  Player.prototype.componentWillMount = () => {}
  const wrapper = mount(<Player match={{params: {id: 1}}} />)
  wrapper.setState({player: {}, bowling: {}, batting: {}})
  wrapper.find('.playerButton').simulate('click')
  t.is(wrapper.find('.bowlingStats').exists(), true)
})

test.only('<NewGame /> renders a form, through a button click', t => {
  NewGame.prototype.componentDidMount = () => {}
  const wrapper = mount(<NewGame store={store}/>)
  wrapper.setState({newGame: {}})
  wrapper.find('button').simulate('click')
  t.is(wrapper.find('form').exists(), true)
})

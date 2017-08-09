import test from 'tape'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import jsdom from 'jsdom'

import App from '../client/components/App'
import Team from '../client/components/Team'
import PlayerStats from '../client/components/PlayerStats'

test.only('<App />', t => {
  const expected = 'The Bats'
  const wrapper = shallow(<App />)
  t.equal(wrapper.find('h1').text(), expected)
  t.end()
})

test.only('<PlayingStats />', t => {
  const wrapper = mount(<PlayerStats />)
  t.is(wrapper.find('.bowlingStats').exists(), true)
})

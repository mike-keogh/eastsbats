import React from 'react'
import test from 'ava'
import { shallow, mount, render } from 'enzyme'
import jsdom from 'jsdom'

import App from '../../client/components/App'
import Team from '../../client/components/Team'
import PlayerStats from '../../client/components/PlayerStats'
import Images from '../../client/components/Images'
import Home from '../../client/components/Home'
import Report from '../../client/components/Report'
import './setup-dom'

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

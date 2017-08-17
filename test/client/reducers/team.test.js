import test from 'ava'
import team from '../../../client/reducers/team'

test('initial state', t => {
  const expected = []
  const actual = team(undefined, {})
  t.deepEqual(expected, actual)
})

test('state receives team', t => {
  const state = ['team']
  const action = {type: 'RECEIVE_TEAM', team: [{}]}

  const expected = [{}]
  const actual = team(state, action)

  t.deepEqual(actual, expected)
})

test('add a player', t => {
  const state = [{player: 'bob'}]
  const action = {
    type: 'ADD_PLAYER',
    player: {player: 'alice'}
  }

  const expected = [
    {player: 'bob'},
    {player: 'alice'}
  ]
  const actual = team(state, action)

  t.deepEqual(actual, expected)
})

test('delete a player', t => {
  const state = [{name: 'bob', id: 1}, {name: 'alice', id: 2}]
  const action = {
    type: 'DELETE_PLAYER',
    player: {name: 'bob', id: 1}
  }
  const expected = [{name: 'alice', id: 2}]
  const actual = team(state, action)
  t.deepEqual(actual, expected)
})

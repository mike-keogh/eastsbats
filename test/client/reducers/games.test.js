import test from 'ava'

import games from '../../../client/reducers/games'

test('initial state', t => {
  const expected = []
  const actual = games(undefined, {})
  t.deepEqual(actual, expected)
})

test('receives games', t => {
  const state = [{location: 'te whiti'}]
  const action = {
    type: 'RECEIVE_GAMES',
    games: [{location: 'te whiti'}]
  }
  const expected = [{location: 'te whiti'}]
  const actual = games(state, action)
  t.deepEqual(expected, actual)
})

test('adds a game', t => {
  const state = [{opponent: 'aces'}]
  const action = {
    type: 'ADD_GAME',
    game: {location: 'basin reserve'}
  }
  const expected = [
    {opponent: 'aces'}, {location: 'basin reserve'}
  ]
  const actual = games(state, action)
  t.deepEqual(actual, expected)
})

test('delete a game', t => {
  const state = [{game_id: 1}, {game_id: 2}]
  const action = {
    type: 'DELETE_GAME',
    game: {
      game_id: 1
    }
  }

  const expected = [{game_id: 2}]
  const actual = games(state, action)

  t.deepEqual(actual, expected)
})

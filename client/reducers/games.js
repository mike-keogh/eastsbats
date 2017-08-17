export default function games(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_GAMES':
      return [...action.games]
    case 'ADD_GAME':
      return [...state, action.game]
    default:
      return state
  }
}

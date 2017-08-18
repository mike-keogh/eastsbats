export default function games(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_GAMES':
      return [...action.games]
    case 'ADD_GAME':
      return [...state, action.game]
    case 'DELETE_GAME':
      return [...state].filter((game) => game.game_id != action.game.game_id)
    default:
      return state
  }
}

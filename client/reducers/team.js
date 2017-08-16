export default function team (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_TEAM':
      return [...action.team]
    case 'ADD_PLAYER':
      return [...state, action.player]
    case 'DELETE_PLAYER':
      return  [...state].filter(player => player.id != action.player.id)
    default:
      return state
  }
}

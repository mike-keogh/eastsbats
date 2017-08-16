export default function deletePlayerReducer (state = [], action) {
  switch (action.type) {
    case 'DELETE_PLAYER':
      return [...state].filter(player => player != action.player)
    default:
      return state
  }
}

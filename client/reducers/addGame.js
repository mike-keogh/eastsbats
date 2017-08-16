export default function addGameReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_GAME':
      return [...state, action.newGame]
    default:
      return state
  }
}

export default function addPlayerReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [...state, action.newPlayer]
    default:
      return state
  }
}

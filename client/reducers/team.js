export default function team (state = [], action) {
  console.log(action);
  switch (action.type) {
    case 'RECEIVE_TEAM':
      return [...action.team]
    default:
      return state
  }
}

export default function images(state = [], action) {
  switch (action.type) {
    case "RECEIVE_IMAGES":
      return [...action.images];
    default:
      return state;
  }
}

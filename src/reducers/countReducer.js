const INTITIAL_STATE = 66

export default function countReducer(state = INTITIAL_STATE, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

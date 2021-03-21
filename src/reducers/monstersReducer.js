const INITIAL_STATE = {
  loading: false,
  error: "",
  data: [],
}

export default function monstersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOAD_MONSTERS_REQUEST":
      return {
        ...state,
        loading: true,
        error: "",
      }
    case "LOAD_MONSTERS_SUCCESS":
      return {
        loading: false,
        error: "",
        data: action.data,
      }
    case "LOAD_MONSTERS_FAILED":
      return {
        ...state,
        error: action.error,
        data: [],
      }
    default:
      return state
  }
}

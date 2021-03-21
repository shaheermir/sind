import { combineReducers } from "redux"

import countReducer from "./countReducer"
import monstersReducer from "./monstersReducer"

export default combineReducers({
  count: countReducer,
  monsters: monstersReducer,
})

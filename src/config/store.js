import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import ReduxLogger from "redux-logger"

import rootSaga from "../sagas/rootSaga"
import rootReducer from "../reducers"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === "development") {
  middlewares.push(ReduxLogger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)

export default store

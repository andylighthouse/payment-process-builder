import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import CreateSagaMiddleware from "redux-saga"

import reducers from "../reducers"
import rootSaga from "./sagas"

const sagaMiddleware = CreateSagaMiddleware()
const middleware = [sagaMiddleware]

if (process.env.NODE_ENV === "development") {
  middleware.push(logger)
}

const store = createStore(reducers, applyMiddleware(...middleware))
sagaMiddleware.run(rootSaga)

export default store

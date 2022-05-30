import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from './reducers'
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware()
// const store = createStore(rootReducer)

const store = compose(
    applyMiddleware(sagaMiddleware)
    // window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga)

export default store;
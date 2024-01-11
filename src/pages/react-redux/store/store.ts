import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import counterReducer from "../reducers/counter.reducer";
import academyReducer from "../reducers/academy.reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root.saga";
import userReducer from "../reducers/user.reducer";
import { RootState } from "../types/model";

const allReducers = combineReducers({ counterReducer, academyReducer, user: userReducer })

// config
const sagaMiddleware = createSagaMiddleware()

// const mainStore = createStore(allReducers);

const mainStore = createStore<RootState, any, any, any>(allReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)


export default  mainStore ;
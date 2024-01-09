import { combineReducers, legacy_createStore as createStore } from "redux";
import counterReducer from "../reducers/counter.reducer";
import academyReducer from "../reducers/academy.reducer";

const allReducers = combineReducers({counterReducer, academyReducer})

const mainStore = createStore(allReducers)


export default mainStore;
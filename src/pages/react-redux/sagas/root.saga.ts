import { takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "../types/action.types";
import { fetchUser } from "./user.saga";

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.USER_FETCH_REQUEST, fetchUser)
}

export default  rootSaga
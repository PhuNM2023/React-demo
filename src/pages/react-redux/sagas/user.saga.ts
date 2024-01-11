import { Action } from "redux";
import { call, put } from "redux-saga/effects";
import { ACTION_TYPES } from "../types/action.types";

const USER_API = "https://jsonplaceholder.typicode.com/users/1"

export function* fetchUser(action: Action): any {
  try {
    const response = yield call(fetch, USER_API);
    const data = yield response.json();

    console.log(action, data);
    yield put({type: ACTION_TYPES.USER_FETCH_SUCCEEDED, payload: data});
  } catch (error: any) {
    yield put({type: ACTION_TYPES.USER_FETCH_FAILED, message: error.message});
  }
}
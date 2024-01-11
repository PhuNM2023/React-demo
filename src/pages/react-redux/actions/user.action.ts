import { ACTION_TYPES } from "../types/action.types";

export function fetchUserAction() {
  return {type: ACTION_TYPES.USER_FETCH_REQUEST}
}
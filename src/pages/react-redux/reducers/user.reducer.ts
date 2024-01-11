import { ACTION_TYPES } from "../types/action.types";
import { ActionProps } from "../types/model";

const userReducer = (state: any = {}, action: ActionProps) => {
  switch (action.type) {
    case ACTION_TYPES.USER_FETCH_SUCCEEDED:
      return{...state, ...action.payload}
    default:
      return state
  }
}

export default userReducer
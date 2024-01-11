import { ACTION_TYPES } from "../types/action.types";

export function swapAcademyAddress() {
  return { type: ACTION_TYPES.SWAP_ADDRESS}
}

export function changeAcademyName(newValue: string) {
  return { type: ACTION_TYPES.CHANGE_ACADEMY_NAME, payload: newValue}
}
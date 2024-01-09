import { ACTION_TYPES } from "../types/action.types";

export function increaseCountA(value: number) {
  console.log("increaseCountA");
  return {type: ACTION_TYPES.INCREASE_COUNTER_A, 
    payload: {number: value}}
}

export function increaseCountB(value: number) {
  console.log("increaseCountA");
  return {type: ACTION_TYPES.INCREASE_COUNTER_B, 
    payload: {number: value}}
}

export function countNumberClick(value: number) {
  return {type: ACTION_TYPES.NUMBER_CLICK, payload: {number: value}}
}
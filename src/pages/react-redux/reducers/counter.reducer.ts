import { ACTION_TYPES } from "../types/action.types";
import { ActionProps, CounterState } from "../types/model";


const initState: CounterState = {
  countA: 10, 
  countB: 1, 
  total: 11,
  numberClick: 0
}

const counterReducer = (state = initState, action: ActionProps) => {
  console.log("CounterReducerAction",action);

  switch (action.type) {
    case ACTION_TYPES.INCREASE_COUNTER_A:
      return {
        ...state,
        countA: (state.countA += action.payload.number),
        total: state.countA + state.countB,
        numberClick: state.numberClick + 1
      };
    case ACTION_TYPES.INCREASE_COUNTER_B:
      return {
        ...state,
        countB: (state.countB += action.payload.number),
        total: state.countA + state.countB,
        numberClick: state.numberClick + 1
      };
      
    default:
      return state;
  }
}

export default counterReducer;
import { ACTION_TYPES } from "../types/action.types";
import { AcademyProps, ActionProps } from "../types/model";

const initState: AcademyProps = {
  name: "FPT Software",
  address: [
    {street: "Duy Tan", ward: "Cau Giay", city: "Ha Noi", 
    number: 17},
    {street: "Hoa Lac", ward: "Quoc Oai", city: "Ha Noi", 
    number: 111},
  ],
}

const academyReducer = (state = initState, action: ActionProps) => {
  switch (action.type) {
    case ACTION_TYPES.SWAP_ADDRESS:
      return {
        ...state,
        address: state.address.reverse(),
      }
      break;
  
    default:
      break;
  }
  return state
};

export default academyReducer;
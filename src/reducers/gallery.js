import { TOGGLE_LIKE } from "../constants/actionTypes";
import { cities } from "../constants/cities";

const INIT_STATE = {
  cities,
};

export default (state = INIT_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case TOGGLE_LIKE: {
      return {
        ...state,
        cities: action.cities,
      };
    }
    default:
      return state;
  }
};

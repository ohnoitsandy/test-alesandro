import { TOGGLE_LIKE, TOGGLE_PHOTOS } from "../constants/actionTypes";
import { cities } from "../constants/cities";

const INIT_STATE = {
  cities,
  likedPhotos: [],
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
    case TOGGLE_PHOTOS: {
      return {
        ...state,
        likedPhotos: action.likedPhotos,
      };
    }
    default:
      return state;
  }
};


import {
  SET_HOTELS,
  VIEW_HOTEL
} from './actions';

const initialState = {
  hotels: [],
  viewing: null,
  cities: []
};

function booking(state = initialState, action = {}) {
  switch (action.type) {
    case SET_HOTELS:
      return {
        ...state,
        hotels: action.hotels
      };
    case VIEW_HOTEL:
      return {
        ...state,
        viewing: action.id
      };
    default:
      return state;
  }
}

export default booking;

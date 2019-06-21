import {
  SET_HOTELS,
  VIEW_HOTEL,
  SEARCH
} from './actions';

const initialState = {
  hotels: [],
  viewing: null,
  search_key: ''
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
        viewing: action.id,
        search_key: ''
      };
    case SEARCH:
      return {
        ...state,
        search_key: action.key
      };
    default:
      return state;
  }
}

export default booking;

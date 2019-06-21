import hotelsService from '../services/hotels';

export const SET_HOTELS = 'SET_HOTELS';
export const VIEW_HOTEL = 'VIEW_HOTEL';
export const SEARCH = 'SEARCH';

export const setHotels = () => {
  const hotels = hotelsService.getHotels();

  return {
    type: SET_HOTELS,
    hotels
  };
};

export const viewHotel = id => {
  return {
    type: VIEW_HOTEL,
    id
  };
};

export const search = key => {
  return {
    type: SEARCH,
    key
  };
};

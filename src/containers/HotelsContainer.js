import {connect} from 'react-redux';
import Hotels from '../components/Hotels';

function searchByCity(hotels, key) {
  return hotels.filter(hotel => hotel.city.toLowerCase().includes(key.toLowerCase()));
}

function searchByHotel(hotels, key) {
  return hotels.filter(hotel => hotel.name.toLowerCase().includes(key.toLowerCase()) && !hotel.city.toLowerCase().includes(key.toLowerCase()));
}

function getSearchResult(hotels, key) {
  if (key.length > 0) {
    return [
      ...searchByHotel(hotels, key),
      ...searchByCity(hotels, key)
    ];
  }

  return hotels;
}

function mapStateToProps(state) {
  return {
    hotels: getSearchResult(state.hotels, state.search_key)
  };
}

export default connect(mapStateToProps)(Hotels);

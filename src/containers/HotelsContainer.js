import {connect} from 'react-redux';
import Hotels from '../components/Hotels';

function getSearchResult(hotels, key) {
  if (key.length > 0) {
    return hotels.filter(hotel => hotel.city.toLowerCase() === key.toLowerCase());
  }

  return hotels;
}

function mapStateToProps(state) {
  return {
    hotels: getSearchResult(state.hotels, state.search_key)
  };
}

export default connect(mapStateToProps)(Hotels);

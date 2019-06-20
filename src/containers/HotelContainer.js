import {connect} from 'react-redux';
import Hotel from '../components/Hotel';

function mapStateToProps(state) {
  return {
    hotels: state.hotels
  };
}

export default connect(mapStateToProps)(Hotel);

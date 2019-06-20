import {connect} from 'react-redux';
import Hotels from '../components/Hotels';

function mapStateToProps(state) {
  return {
    hotels: state.hotels
  };
}

export default connect(mapStateToProps)(Hotels);

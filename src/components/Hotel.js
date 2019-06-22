import React, {Component} from 'react';
import {viewHotel} from '../store/actions';
import HotelCard from './Hotels/Card';
import PropTypes from 'prop-types';

class Hotel extends Component {

  state = {
    hotel: null
  };

  componentDidMount() {
    const {dispatch, match, hotels} = this.props;
    dispatch(viewHotel(Number(match.params.id)));

    const hotel = hotels.find(h => h.id === Number(match.params.id));

    if (hotel) {
      this.setState({hotel});
    }
  }

  render() {
    const existed = !!this.state.hotel;

    return (
      <section className="page">
        {existed && <HotelCard hotel={this.state.hotel} expanded/>}
      </section>
    );
  }
}

Hotel.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Hotel;

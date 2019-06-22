import React, {Component} from 'react';
import {viewHotel} from '../store/actions';
import HotelCard from './Hotels/Card';

class Hotel extends Component {

  state = {
    hotel: null
  };

  componentDidMount() {
    const {dispatch, match} = this.props;
    dispatch(viewHotel(Number(match.params.id)));

    const hotel = this.props.hotels.find(h => h.id === Number(this.props.match.params.id));

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

export default Hotel;

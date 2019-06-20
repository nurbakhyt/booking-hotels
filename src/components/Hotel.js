import React, {Component} from 'react';
import {viewHotel} from '../store/actions';

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
    const hotelName = this.state.hotel ? this.state.hotel.name : 'Не найдено';
    const existed = !!this.state.hotel;

    return (
      <section className="page">
        <h1 className="page__title">{hotelName}</h1>
        <p>{existed && this.state.hotel.description}</p>
      </section>
    );
  }
}

export default Hotel;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './card.scss';
import CardMedia from './CardMedia';
import Booking from './Booking';

class HotelCard extends Component {
  render() {
    const {hotel, expanded} = this.props;

    let actions = <Link to={`/hotels/${hotel.id}`} className="card__link" title={`Забронировать ${hotel.name}`}>Забронировать</Link>;

    if (expanded) {
      actions = <Booking hotel={hotel}/>;
    }

    return (
      <article className="card">

        <CardMedia hotel={hotel}/>

        <div className="card-content">
          <Link to={`/hotels/${hotel.id}`} className="card__name">
            {hotel.name}
          </Link>
          <p className="card__description">{hotel.description}</p>

          {actions}

        </div>
      </article>
    );
  }
}

HotelCard.defaultProps = {
  expanded: false
};

export default HotelCard;

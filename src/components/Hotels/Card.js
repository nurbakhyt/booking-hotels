import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './card.scss';

class HotelCard extends Component {
  render() {
    const {hotel} = this.props;

    return (
      <article className="card">
        <div className="card-media">
          <img className="card__image" src={hotel.images[0]} alt={hotel.name} />
          <span className="card__star">⭐ {hotel.stars}</span>
          <span className="card__city">{hotel.city}</span>
        </div>
        <div className="card-content">
          <Link to={`/hotels/${hotel.id}`} className="card__name">
            {hotel.name}
          </Link>
          <p className="card__description">{hotel.description}</p>
          <Link to={`/hotels/${hotel.id}`} className="card__link" title={`Забронировать ${hotel.name}`}>Забронировать</Link>
        </div>
      </article>
    );
  }
}

export default HotelCard;

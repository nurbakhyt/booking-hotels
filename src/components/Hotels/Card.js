import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './card.scss';
import CardMedia from './CardMedia';
import Booking from './Booking';

function HotelCard({hotel, expanded}) {
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

HotelCard.defaultProps = {
  expanded: false
};

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    stars: PropTypes.number.isRequired
  }).isRequired
};

export default HotelCard;

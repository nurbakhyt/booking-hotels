import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './card.scss';
import CardMedia from './CardMedia';

class HotelCard extends Component {
  render() {
    const {hotel} = this.props;

    return (
      <article className="card">

        <CardMedia hotel={hotel}/>

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

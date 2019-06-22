import React, {Component} from 'react';
import './cardMedia.scss';
import Slider from '../Slider/Slider';

class CardMedia extends Component {
  render() {
    const {hotel} = this.props;

    return (
      <div className="card-media">
        <Slider hotel={hotel}/>
        <span role="img" className="card-media__star" aria-label="star">⭐ {hotel.stars}</span>
        <span className="card-media__city">{hotel.city}</span>
      </div>
    );
  }
}

export default CardMedia;

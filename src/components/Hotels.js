import React, {Component} from 'react';
import Card from './Hotels/Card';

class Hotels extends Component {
  render() {
    const {hotels} = this.props;
    const count = hotels.length > 0 ? `${hotels.length} отелей` : 'Нет отелей';
    const cards = hotels.length > 0
      ? hotels.map(h => <Card key={h.id} hotel={h}/>)
      : <p>Нет отелей</p>;

    return (
      <section className="page">
        <h1 className="page__title">Все отели: <small>{count}</small></h1>

        {cards}
      </section>
    );
  }
}

export default Hotels;

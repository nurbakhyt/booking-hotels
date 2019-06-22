import React from 'react';
import PropTypes from 'prop-types';
import Card from './Hotels/Card';
import SearchBar from '../containers/SearchBarContainer';

function Hotels({hotels}) {
  const count = hotels.length > 0 ? `${hotels.length} отелей` : 'Нет отелей';
  const cards = hotels.length > 0
    ? hotels.map(h => <Card key={h.id} hotel={h}/>)
    : <p>Нет отелей</p>;

  return (
    <section className="page">
      <SearchBar/>

      <h2 className="page__title">Все отели: {count}</h2>

      {cards}
    </section>
  );
}

Hotels.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Hotels;

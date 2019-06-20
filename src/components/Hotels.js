import React, {Component} from 'react';

class Hotels extends Component {
  render() {
    const {hotels} = this.props;
    const count = hotels.length > 0 ? `${hotels.length} отелей` : 'Нет отелей';

    return (
      <section className="page">
        <h1 className="page__title">Все отели: <small>{count}</small></h1>

      </section>
    );
  }
}

export default Hotels;

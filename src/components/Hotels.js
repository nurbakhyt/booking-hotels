import React, {Component} from 'react';

class Hotels extends Component {
  render() {
    const {hotels} = this.props;

    const count = hotels.length > 0 ? `${hotels.length} отелей` : 'Нет отелей';

    return (
      <main>
        <h1>Все отели: <small>{count}</small></h1>
      </main>
    );
  }
}

export default Hotels;

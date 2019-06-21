import React, {Component} from 'react';
import {search} from '../../store/actions';
import './bar.scss';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      key: this.props.search_key
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(search(this.state.key));
  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="key"
          className="search-bar__input"
          autoComplete="off"
          placeholder="Город или отель"
          onChange={this.handleChange}
        />
        <button type="submit"className="search-bar__btn">Найти</button>
      </form>
    );
  }
}

export default SearchBar;

import React, {Component} from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';
import 'moment/locale/ru';
import './booking.scss';
import moment from 'moment';
import Message from './Message';

class Booking extends Component {

  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      duration: 0,
      booked: false
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.book = this.book.bind(this);
  }

  handleDateChange({startDate, endDate}) {
    this.setState({
      startDate,
      endDate,
      duration: moment(endDate).diff(startDate, 'days')
    });
  }

  book() {
    this.setState({booked: true});
  }

  render() {
    const {startDate, endDate, focusedInput, duration, booked} = this.state;
    const startStr = moment(startDate).format('dddd, D MMMM YYYY');
    const endStr = moment(endDate).format('dddd, D MMMM YYYY');

    return (
      <div className="booking">
        <p>Выберите дату пребывания</p>

        <div className="booking-dates">
          <DateRangePicker
            startDate={startDate}
            startDateId="start_date_id"
            endDate={endDate}
            endDateId="end_date_id"
            onDatesChange={this.handleDateChange}
            focusedInput={focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
          />
        </div>

        {booked && <Message
          hotelName={this.props.hotel.name}
          startDate={startStr}
          endDate={endStr}
          duration={duration}
        />}

        {!booked && <button onClick={this.book} className="card__link">
          Забронировать
        </button>}

      </div>
    );
  }
}

export default Booking;

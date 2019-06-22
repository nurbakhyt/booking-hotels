import React from 'react';

function Message({hotelName, startDate, endDate, duration}) {
  return (
    <div className="booking__message">
      Вы успешно забронировали номер в отеле {hotelName}.<br />
      Заезд: <time>{startDate}</time><br />
      Отъезд: <time>{endDate}</time><br />
      Общая длительность проживания: {duration} ночи.
    </div>
  );
}

export default Message;

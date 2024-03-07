import React, { useState } from 'react';
import WeatherIcon from './Assets/weather-icon.webp'

function CurrentDayDate() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentDate);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);

  return (
    <div>
      <h1>{day}</h1>
      <p>{formattedDate}</p>
      <img src={WeatherIcon} />

    </div>
  );
}

export default CurrentDayDate;

import React, { useState, useEffect } from 'react';
//scss
import layoutStyle from '../../assets/scss/Layout.module.scss';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = 'ff49a8e56da220402275ee725f6c5360';
    const city = 'Seoul';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!weather || weather.cod !== 200) return <div>Failed to load weather data.</div>;

  return (
    <div className={layoutStyle.weather}>
      {/* <h3>{weather.name} Weather</h3>  지역명 */}
      <p className={layoutStyle.temperature}>{weather.main.temp}°C</p>
      <p>
        <img 
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt={weather.weather[0].description}
        />
      </p>
    </div>
  );
}

export default Weather;
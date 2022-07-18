import React from 'react';

const Weather = ({ weather }) => {

    if (weather.length !== 0) {
        const conditions = weather.weather

        return (
            <div>
                <h2>Weather in {weather.name}</h2>
                <p>temperature {(weather.main.temp - 273.15).toFixed(2)} Celcius</p>
                <img src={`http://openweathermap.org/img/wn/${conditions.map(i => i.icon)}@2x.png`} alt="cloud"/>
                <p>wind {weather.wind.speed} m/s</p>
            </div>
        )
    }
};

export default Weather;
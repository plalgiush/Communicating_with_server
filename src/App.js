import {useEffect, useState} from 'react';
import axios from "axios";
import Countries from "./components/Countries";
import Filter from "./components/Filter";
import Weather from "./components/Weather";

const App = () => {
    const [countries, setCountries] = useState([])
    const [weather, setWeather] = useState([])
    const [filter, setFilter] = useState('')
    const api_key = process.env.REACT_APP_API_OPENWEATHER_KEY

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    useEffect(() => {
        if (countries.length === 1) {
            countries.map(country => {
                axios
                    .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`)
                    .then(response => {
                        setWeather(response.data)
                    })
            })
        }
    }, [countries])

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter} />
            <Countries countries={countries} setCountries={setCountries} filter={filter} />
            <Weather weather={weather} />
        </div>
    )
}

export default App
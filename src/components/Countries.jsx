import React from 'react';
import {nanoid} from "nanoid";

const Countries = ({ countries, filter, setCountries }) => {

    const countryData = countries.filter(country => {
        if (filter === '') {
            return false
        } else {
            return country.name.common.toLowerCase().includes(filter)
        }
    })

    const fullInfo = (countryData) => {
        return (
            countryData.map(info => {
                const languages = Object.values(info.languages),
                      countryName = info.name.common,
                      countryCapital = info.capital,
                      countryArea = info.area,
                      countryFlag = info.flags.svg;

                return (
                    <div key={nanoid()}>
                        <h2>{countryName}</h2>
                        <p>Capital {countryCapital}</p>
                        <p>area {countryArea}</p>
                        <h3>languages:</h3>
                        <ul>
                            {languages.map(language => <li key={nanoid()}>{language}</li>)}
                        </ul>
                        <img src={countryFlag} alt="flag"/>
                    </div>
                )
            })
        )
    }

    const showResult = () => {
        if (filter.length === 0) {
            return <p>Enter the name of the country</p>
        } else if (countryData.length > 10) {
            return <p>Too many matches, specify another filter</p>
        } else if (countryData.length === 1) {
            return fullInfo(countryData)
        } else {
            return countryData.map(country =>
                <div key={nanoid()}> {country.name.common}
                    <button onClick={() => setCountries([country])}>show</button>
                </div>)
        }
    }

    return (
        <div>
            {showResult()}
        </div>
    );
};

export default Countries;
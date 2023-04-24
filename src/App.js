import React, { useState } from 'react';
import SearchForm from './widgets/SearchForm';
import "./css/App.css"

function App() {
    const [countryList, setCountryList] = useState([]);

    return (
        <div className="App">
            <h1>Country Info Search</h1>
            <SearchForm setCountryList={setCountryList} />
            {countryList.length > 0 ? (
                <ul>
                    {countryList.map((country) => (
                        <li key={country.alpha2Code}>
                            <h2>{country.name.common}</h2>
                            <p>Capital: {country.capital}</p>
                            <p>Region: {country.region}</p>
                            <p>Population: {country.population}</p>
                            <p>Language: {Object.values(country?.languages ?? {}).join(", ")}</p>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

export default App;
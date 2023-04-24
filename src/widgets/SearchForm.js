import React, { useState } from 'react';
import axios from 'axios';

function SearchForm({ setCountryList }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://127.0.0.1:5000/countries?name=${searchQuery}`);
            const countries = response.data;
            setCountryList(countries);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                id="searchInput"
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={"searchInput"}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;
"use client";

import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
        setQuery('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for recipes by ingredients, cuisine, or keywords..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
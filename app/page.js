"use client";

import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const handleSearch = (query) => {
        // Logic for handling search (e.g., redirecting to search results)
        console.log('Searching for:', query);
        // You can use router.push to navigate to the search results page
    };

    return (
        <div>
            <Navbar />
            <h1>Recipe Finder</h1>
            <SearchBar onSearch={handleSearch} />
        </div>
    );
};

export default Home;
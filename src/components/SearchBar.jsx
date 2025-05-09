import { useState } from "react";
import "../styles/SearchBar.css";


const SearchBar = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClear = () => {
    setQuery("");
    onClear(); 
  };
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className="search-button" onClick={handleSearch}>
        🔍
      </button>
      <button className="clear-button" onClick={handleClear}>
        ✖
      </button>
    </div>
  );
};

export default SearchBar;

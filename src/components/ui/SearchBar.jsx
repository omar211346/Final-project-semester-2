function SearchBar({ searchTerm, onSearchChange }) {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search recipes..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default SearchBar;
  
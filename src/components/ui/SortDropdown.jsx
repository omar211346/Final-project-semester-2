function SortDropdown({ sortOrder, onSortChange }) {
    const handleSort = (e) => {
      console.log("Selected sort:", e.target.value);
      onSortChange(e.target.value); 
    };
  
    return (
      <div className="sort-dropdown">
        <select value={sortOrder} onChange={handleSort}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    );
  }
  
  export default SortDropdown;
  
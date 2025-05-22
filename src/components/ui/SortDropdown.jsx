function SortDropdown() {
    const handleSort = () => {
      console.log("Sorting by selected value")
    }
  
    return (
      <div className="sortDropdown">
        <select handleSort={handleSort}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    );
  }
  
  export default SortDropdown;

import "../styles/SortDropdown.css";


const SortDropdown = ({onSort}) => {
    const handleSortChange = (e) => {
        onSort(e.target.value);
      };
    return ( 
        <select className="sort-dropdown" onChange={handleSortChange}>
       <option value="">Sort By</option>
      <option value="title-asc">Title (A-Z)</option>
      <option value="release-date">Release Date (Newest to Oldest)</option>
      <option value="rating-desc">Rating (Highest to Lowest)</option>
      </select>
     );
}
 
export default SortDropdown;
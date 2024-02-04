import SearchIcon from "../../Icons/SearchIcon";
import "./Search.scss";
const Search = () => {
  return (
    <div className="search-container">
      <p className="records-count">Found 234 Countries</p>
      <div className="search-wrapper border-radius">
        <SearchIcon />
        <p>Search by Name, Region, Subregion</p>
      </div>
    </div>
  );
};
export default Search;

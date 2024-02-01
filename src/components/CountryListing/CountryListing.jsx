import "./countrylisting.scss";
import SearchIcon from "../../Icons/SearchIcon";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
const CountryListing = () => {
  const value = useContext(AppContext);
  console.log(value);
  return (
    <div className="country-listing">
      <div className="search-container">
        <p className="records-count">Found 234 Countries</p>
        <div className="search-wrapper">
          <SearchIcon />
          <p>Search by Name, Region, Subregion</p>
        </div>
      </div>
    </div>
  );
};
export default CountryListing;

import "./countrylisting.scss";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Search from "../Search/Search";
import Sorting from "../Sorting/Sorting";
const CountryListing = () => {
  const value = useContext(AppContext);
  console.log(value);
  return (
    <div className="country-listing">
      <Search />
      <Sorting />
    </div>
  );
};
export default CountryListing;

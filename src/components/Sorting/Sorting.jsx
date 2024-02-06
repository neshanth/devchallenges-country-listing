import "./Sorting.scss";
const Sorting = () => {
  return (
    <div className="sorting-container">
      <label className="sorting-label small">Sort by</label>
      <select className="sorting-input border-radius text">
        <option>Population</option>
        <option>Alphabetical</option>
        <option>Area</option>
      </select>
    </div>
  );
};
export default Sorting;

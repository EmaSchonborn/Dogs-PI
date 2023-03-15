import { useState } from "react";
import Filter from "./Filtering";
import Order from "./Ordering";
import style from "./FilterButtons.module.css";

const FilterButton = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div
      className={`${style["button-container"]} ${
        showFilters ? style["filter-open"] : ""
      }`}
    >
      <button onClick={() => setShowFilters(!showFilters)}>Filters</button>
      {showFilters && (
        <>
          <Filter />
          <Order />
        </>
      )}
    </div>
  );
};

export default FilterButton;

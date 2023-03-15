import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogByName } from "../../redux/actions";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchDog, setSearchDog] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchDog(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getDogByName(searchDog));
  };

  return (
    <div className={style.searchbar_container}>
      <form>
        <input
          className={style.searchbar}
          type="text"
          placeholder="Find by raze..."
          onChange={handleChange}
        />
        <button
          className={style.searchbar_button}
          type="submit"
          onClick={handleClick}
        >
          Find
        </button>
      </form>
    </div>
  );
}

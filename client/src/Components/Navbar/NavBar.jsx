import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={style.mainContainer}>
      <SearchBar />
      <Link className={style.link_button} to="/create-dog">
        Create Dog
      </Link>
    </div>
  );
}

export default NavBar;

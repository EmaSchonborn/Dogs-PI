import { Link } from "react-router-dom";
import style from "./NavHome.module.css"

const NavHome = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/home">HOME</Link>
    </div>
  );
};

export default NavHome;

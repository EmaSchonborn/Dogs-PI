import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDog } from "../../redux/actions";
import style from "./Detail.module.css";
import DetailedDog from "../../Components/CardDetail/CardDetail";
import NavHome from "../../Components/Navbar/NavHome";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDog(id));
  }, [dispatch, id]);

  return (
    <div className={style.component}>
      <NavHome className={style.nav_home} />
      <div className={style.card}>
        <DetailedDog />
      </div>
    </div>
  );
};

export default Detail;

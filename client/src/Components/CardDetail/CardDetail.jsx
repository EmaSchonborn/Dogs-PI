import { useSelector } from "react-redux";
import style from "./CardDetail.module.css";

const DetailedDog = () => {
  const dog = useSelector((state) => state.dog);
  const tempers = dog.tempers?.map((temp) => temp.name).join(", ");

  return (
    <div className={style.idCard}>
      <span className={style.name}>{dog.name}</span>
      <section className={style.structure}>
        <img
          className={style.image}
          src={dog.image || "https://rb.gy/43umkn"}
          alt="Dog Image"
        />
        <div className={style.details}>
          <span>Height: {dog.height} cm</span>
          <span>Weight: {dog.weight} kg</span>
          <span>Life span: {dog.life_span} </span>
          <span>Temperaments: {tempers }</span>
        </div>
      </section>
    </div>
  );
};

export default DetailedDog;

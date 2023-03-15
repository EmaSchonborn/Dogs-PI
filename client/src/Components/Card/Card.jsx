import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <section className={style.section}>
        <span className={style.name}>{props.name}</span>
        <img src={props.image} alt="Not Found" />
      </section>
      <section className={style.sectionTwo}>
        <span>Weight: {props.weight} kg</span>
        <p>Temperament: {props.temperament}</p>
      </section>
    </div>
  );
};

export default Card;

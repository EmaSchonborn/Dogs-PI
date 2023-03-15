import style from "./FormTempers.module.css"

const selectedTempers = ({ selectedTempers }) => {
  return (
    <div className={style.container}>
      {selectedTempers.map((temp) => (
        <div key={temp.id}>
          <em>·{temp.name}·</em>
        </div>
      ))}
    </div>
  );
};

export default selectedTempers;

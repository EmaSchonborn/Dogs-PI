import { useSelector, useDispatch } from "react-redux";
import { filterByTemper, filterBySource } from "../../redux/actions"
import style from "./Filtering.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const tempers = useSelector((state) => state.tempers);

  const handleTempersFilter = (e) => {
    e.preventDefault();
    dispatch(filterByTemper(e.target.value));
  };
  

  const handleSourceDogs = (e) => {
    e.preventDefault();
    dispatch(filterBySource(e.target.value));
  };

  return (
    <div className={style.filters}>
      <div>
        <select onChange={handleSourceDogs}>
          <option disabled selected defaultValue>
            Source
          </option>
          <option value="All">All</option>
          <option value="API">API</option>
          <option value="DataBase">Data Base</option>
        </select>
      </div>
      <div>
        <select onChange={handleTempersFilter}>
          <option disabled selected defaultValue>
            Temperament
          </option>
          <option value="All">All</option>
          {tempers?.map((temp) => (
            <option value={temp.name} key={temp.id}>
              {temp.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;

import { useDispatch } from "react-redux";
import { orderWeightAlphabet } from "../../redux/actions";
import style from "./Ordering.module.css";

const Order = () => {
  const dispatch = useDispatch();

  const handleOrdering = (e) => {
    e.preventDefault();
    dispatch(orderWeightAlphabet(e.target.value));
  };

  return (
    <div className={style.order}>
      <select onChange={handleOrdering}>
        <option disabled selected defaultValue>
          Order
        </option>
        <option value="ascendant">A - Z</option>
        <option value="descendant">Z - A</option>
        <option value="Min_Weigth">Min Weigth</option>
        <option value="Max_Weigth">Max Weigth</option>
      </select>
    </div>
  );
};

export default Order;

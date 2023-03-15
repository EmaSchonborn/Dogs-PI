import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavHome from "../../Components/Navbar/NavHome";
import { getTempers, postDog } from "../../redux/actions";
import style from "./Form.module.css";
import FormTempers from "../../Components/FormTempers/FormTempers";
const letters = /^[a-zA-Z\s]*$/;

const Form = () => {
  const dispatch = useDispatch();

  const tempers = useSelector((state) => state.tempers);
  const [selectedTempers, setSelectedTempers] = useState([]);
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [button, setButton] = useState(true);

  const validate = (form) => {
    let errors = {};
    form.name.length > 0 && !letters.test(form.name)
      ? (errors.name = "3 characters at least required- Only letters allowed")
      : (errors.name = "");

    form.height.length > 0 && !(form.height >= 5)
      ? (errors.height = "The minimum height is 5 cm")
      : (errors.height = "");

    form.minWeight.length > 0 && !(form.minWeight >= 1)
      ? (errors.minWeight = "The minimum weight is 1 kg")
      : (errors.minWeight = "");

    form.maxWeight.length > 0 && !(form.maxWeight - form.minWeight >= 1)
      ? (errors.maxWeight = "Must be greater than min weight")
      : (errors.maxWeight = "");

    form.life_span.length > 0 && !(form.life_span >= 1)
      ? (errors.life_span = "Minimum life span is 1 year")
      : (errors.life_span = "");
    return errors;
  };

  const addTemper = (temp) => {
    if (!selectedTempers.find((t) => t.id === temp.id)) {
      setSelectedTempers([...selectedTempers, temp]);
    }
  };

  useEffect(() => {
    dispatch(getTempers());
  }, [dispatch]);

  const [form, setForm] = useState({
    name: "",
    height: "",
    minWeight: "",
    maxWeight: "",
    life_span: "",
    temperament: [],
  });

  const [errors, setError] = useState({
    name: "",
    height: "",
    minWeight: "",
    maxWeight: "",
    life_span: "",
    temperament: [],
  });

  useEffect(() => {
    if (
      form.name.length > 0 &&
      form.height.length > 0 &&
      form.minWeight.length > 0 &&
      form.maxWeight.length > 0 &&
      form.life_span.length > 0 &&
      form.temperament.length > 0
    )
      setButton(false);
    else setButton(true);
  }, [form, setButton]);

  const changeFunc = (e) => {
    const prop = e.target.name;
    const value = e.target.value;

    setError(validate({ ...form, [prop]: value }));
    setForm({ ...form, [prop]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postDog(form));
    alert("The dog was succesfully created");
    setForm({
      name: "",
      height: "",
      minWeight: "",
      maxWeight: "",
      life_span: "",
    });
    setSelectedTempers([]);
    setSuccessSubmit(true);
    setTimeout(() => {
      setSuccessSubmit(false);
    }, 5000);
  };

  const selectHandle = (e) => {
    setForm({
      ...form,
      temperament: [...form.temperament, e.target.value],
    });
  };

  return (
    <div className={style.container}>
      <div className={style.nav}>
        <NavHome />
      </div>
      <form className={style.form} onSubmit={submitHandler}>
        <h4 className="dog_creator">Dog Creator</h4>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => changeFunc(e)}
            name="name"
          />
          <span>{errors.name}</span>
        </div>
        <div>
          <label>Height [cm]</label>
          <input
            type="number"
            value={form.height}
            onChange={(e) => changeFunc(e)}
            name="height"
          />
          <span>{errors.height}</span>
        </div>
        <div>
          <label>Min Weight [kg]</label>
          <input
            type="number"
            value={form.minWeight}
            onChange={(e) => changeFunc(e)}
            name="minWeight"
          />
          <span>{errors.minWeight}</span>
        </div>
        <div>
          <label>Max Weight [kg]</label>
          <input
            type="number"
            value={form.maxWeight}
            onChange={(e) => changeFunc(e)}
            name="maxWeight"
          />
          <span>{errors.maxWeight}</span>
        </div>
        <div>
          <label>Life span [years]</label>
          <input
            type="number"
            value={form.life_span}
            onChange={(e) => changeFunc(e)}
            name="life_span"
          />
          <span>{errors.life_span}</span>
        </div>
        <div>
          <select
            onChange={(e) => {
              addTemper(tempers.find((t) => t.id === parseInt(e.target.value)));
              selectHandle(e);
            }}
          >
            <option>Select a Temperament</option>
            {tempers?.map((temp) => (
              <option
                value={temp.id}
                key={temp.name + Math.random()}
                className={style.displayed_temperament}
              >
                {temp.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Selected:</label>
          <FormTempers
            selectedTempers={selectedTempers}
            className={style.formTemper}
          />
        </div>
        <button className={style.button_create} disabled={button} type="submit">
          Create
        </button>
        {successSubmit && (
          <em disabled={successSubmit}>The dog was succesfully created</em>
        )}
      </form>
    </div>
  );
};

export default Form;

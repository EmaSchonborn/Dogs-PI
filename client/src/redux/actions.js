import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG = "GET_DOG";
export const GET_DOG_BY_NAME = "GET_DOG_BY_NAME";
export const POST_DOG = "POST_DOG";
export const GET_TEMPERS = "GET_TEMPERS";
export const ORDER_WEIGHT_ALPHABET = "ORDER_WEIGHT_ALPHABET";
export const FILTER_BY_TEMPER = "FILTER_BY_TEMPER";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";

//es mejor dejar la lógica en las actions, para que el reducer sólo haga los cambios de estados

export const getDogs = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/dogs");
    const dogs = apiData.data;

    dispatch({
      type: GET_DOGS,
      payload: dogs,
    });
  };
};

export const getDog = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/dogs/${id}`);
    const dog = apiData.data;

    dispatch({
      type: GET_DOG,
      payload: dog,
    });
  };
};

export const getDogByName = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    const namedDog = apiData.data;

    dispatch({
      type: GET_DOG_BY_NAME,
      payload: namedDog,
    });
  };
};

export const getTempers = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/temperaments");
    const tempers = apiData.data;

    dispatch({
      type: GET_TEMPERS,
      payload: tempers,
    });
  };
};

export const postDog = (payload) => {
  return async function() {
    const data = await axios.post("http://localhost:3001/dogs", payload);
    return data;
  }
}

export const orderWeightAlphabet = (payload) => {
  return { type: ORDER_WEIGHT_ALPHABET, payload };
};

export const filterByTemper = (payload) => {
  return { type: FILTER_BY_TEMPER, payload };
};

export const filterBySource = (payload) => {
  return { type: FILTER_BY_SOURCE, payload };
};

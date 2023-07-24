import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG = "GET_DOG";
export const GET_DOG_BY_NAME = "GET_DOG_BY_NAME";
export const POST_DOG = "POST_DOG";
export const GET_TEMPERS = "GET_TEMPERS";
export const ORDER_WEIGHT_ALPHABET = "ORDER_WEIGHT_ALPHABET";
export const FILTER_BY_TEMPER = "FILTER_BY_TEMPER";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const host_dogs = process.env.REACT_APP_GET_DOGS;
const host_tempers = process.env.REACT_APP_GET_TEMPERS;

export const getDogs = () => {
  try {
    return async function (dispatch) {
      const apiData = await axios.get(host_dogs);
      const dogs = apiData.data;

      dispatch({
        type: GET_DOGS,
        payload: dogs,
      });
    };
  } catch (error) {
    console.error("Se produjo un error al obtener los datos del perro.");
  }
};

export const getDog = (id) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`${host_dogs}/${id}`);
      const dog = apiData.data;

      dispatch({
        type: GET_DOG,
        payload: dog,
      });
    } catch (err) {
      console.error("Se produjo un error al obtener los datos del perro.");
    }
  };
};

export const getDogByName = (name) => {
  try {
    return async function (dispatch) {
      const apiData = await axios.get(`${host_dogs}?name=${name}`);
      const namedDog = apiData.data;

      dispatch({
        type: GET_DOG_BY_NAME,
        payload: namedDog,
      });
    };
  } catch (error) {
    console.error("Se produjo un error al obtener los datos del perro.");
  }
};

export const getTempers = () => {
  try {
    return async function (dispatch) {
      const apiData = await axios.get(`${host_tempers}/temperaments`);
      const tempers = apiData.data;

      dispatch({
        type: GET_TEMPERS,
        payload: tempers,
      });
    };
  } catch (error) {
    console.error("Se produjo un error al obtener los datos de los temperamentos.");
  }
};

export const postDog = (payload) => {
  return async function () {
    const data = await axios.post(host_dogs, payload);
    return data;
  };
};

export const setCurrentPage = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: pageNumber,
  };
};

export const orderWeightAlphabet = (payload) => {
  return { type: ORDER_WEIGHT_ALPHABET, payload };
};

export const filterByTemper = (payload) => {
  return { type: FILTER_BY_TEMPER, payload };
};

export const filterBySource = (payload) => {
  return { type: FILTER_BY_SOURCE, payload };
};

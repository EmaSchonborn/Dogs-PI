import {
  GET_DOGS,
  GET_DOG,
  GET_DOG_BY_NAME,
  GET_TEMPERS,
  ORDER_WEIGHT_ALPHABET,
  FILTER_BY_TEMPER,
  FILTER_BY_SOURCE,
  SET_CURRENT_PAGE,
} from "./actions";

const intialState = {
  dogs: [],
  dog: [],
  ftrDogs: [],
  ftrTempers: [],
  tempers: [],
  currentPage: 1,
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload, ftrDogs: action.payload };

    case GET_DOG:
      return { ...state, dog: action.payload };

    case GET_DOG_BY_NAME:
      return { ...state, ftrDogs: action.payload };

    case GET_TEMPERS:
      return { ...state, tempers: action.payload };

    case FILTER_BY_SOURCE:
      const sortedSource = state.dogs.filter((dog) => {
        if (action.payload === "All") {
          return dog;
        } else if (action.payload === "API") {
          return !isNaN(dog.id);
        } else if (action.payload === "DataBase") {
          return isNaN(dog.id);
        }
        return true;
      });

      return { ...state, ftrDogs: sortedSource };

    case ORDER_WEIGHT_ALPHABET:
      const originalDogs = [...state.ftrDogs];
      const sortedWeight =
        action.payload === "Min_Weigth"
          ? originalDogs.sort((a, b) => a.averageWeight - b.averageWeight)
          : action.payload === "Max_Weigth"
          ? originalDogs.sort((a, b) => b.averageWeight - a.averageWeight)
          : action.payload === "ascendant"
          ? originalDogs.sort((a, b) => (a.name > b.name ? 1 : -1))
          : action.payload === "descendant"
          ? originalDogs.sort((a, b) => (b.name > a.name ? 1 : -1))
          : originalDogs;
      return { ...state, ftrDogs: sortedWeight };

    case FILTER_BY_TEMPER:
      const dogs = state.dogs;
      let filteredDogs = [];
      if (action.payload === "All") {
        filteredDogs = dogs;
      } else {
        for (let i = 0; i < dogs.length; i++) {
          let found = dogs[i].temperament?.includes(action.payload)
            ? dogs[i]
            : undefined;
          if (found) {
            filteredDogs.push(dogs[i]);
          }
        }
      }
      return { ...state, ftrDogs: filteredDogs };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;

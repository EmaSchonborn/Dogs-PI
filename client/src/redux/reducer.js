import { GET_DOGS } from "./actions";
import { GET_DOG } from "./actions";
import { GET_DOG_BY_NAME } from "./actions";
import { GET_TEMPERS } from "./actions";
import { ORDER_WEIGHT_ALPHABET } from "./actions";
import { FILTER_BY_TEMPER } from "./actions";
import { FILTER_BY_SOURCE } from "./actions";

const intialState = {
  dogs: [],
  dog: [],
  ftrDogs: [],
  tempers: [],
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
      const sortedWeight =
        action.payload === "Min_Weigth"
          ? state.ftrDogs.sort((a, b) => {
              return a.averageWeight - b.averageWeight;
            })
          : action.payload === "Max_Weigth"
          ? state.ftrDogs.sort((a, b) => {
              return b.averageWeight - a.averageWeight;
            })
          : action.payload === "ascendant"
          ? state.ftrDogs.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : action.payload === "descendant"
          ? state.ftrDogs.sort((a, b) => {
              if (b.name > a.name) return 1;
              if (b.name < a.name) return -1;
              return 0;
            })
          : state.ftrDogs;

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
            console.log(found);
          }
        }
      }
      return { ...state, ftrDogs: filteredDogs };

    default:
      return { ...state };
  }
};

export default rootReducer;

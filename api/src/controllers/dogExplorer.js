const { Dog, Temper } = require("../db");
const { Op } = require("sequelize");
import axios from "axios";
const urlSource = "https://api.thedogapi.com/v1/breeds";
const urlSource2 = "https://api.thedogapi.com/v1/breeds/search?name=";
const { YOUR_API_KEY } = process.env;

const middleWeight = (string) => {
  const cleanString = string.split(" - ", 2);
  if (cleanString.length === 1) {
    //fix dog id 179 -> incomplete api weigth
    if (cleanString[0].includes("NaN")) return 34;
    return Number(cleanString[0].replace(" kg", ""));
  } else {
    const firstNo = Number(cleanString[0]);
    const secondNo = Number(cleanString[1]);
    // //fix dog id 232 -> incomplete api weigth
    if (isNaN(firstNo)) return 7;
    return (firstNo + secondNo) / 2;
  }
};

const prodApi = (array) => {
  return array.map((el) => {
    return {
      id: el.id,
      image:
        el.image.url ||
        el.image ||
        el.reference_image_id ||
        "https://rb.gy/43umkn",
      name: el.name,
      weight: el.weight.metric || el.weight,
      averageWeight: middleWeight(el.weight.metric) || null,
      temperament: el.temperament,
    };
  });
};

const prodApi2 = (array) => {
  return array.map((el) => {
    return {
      id: el.id,
      image: el.reference_image_id
        ? `https://cdn2.thedogapi.com/images/${el.reference_image_id}.jpg`
        : el.image || "https://rb.gy/43umkn",
      name: el.name,
      weight: el.weight.metric || el.weight,
      averageWeight: el.weight.metric
        ? middleWeight(el.weight.metric)
        : middleWeight(el.weight),
      temperament: el.hasOwnProperty("tempers")
        ? el.tempers.map((t) => t.name).join(", ")
        : el.temperament,
    };
  });
};

const searchAllDogs = async () => {
  const api = `${urlSource}?api_key=${YOUR_API_KEY}`;
  const dataBaseDogs = await Dog.findAll({
    include: {
      model: Temper,
      attributes: ["name"],
    },
  });
  const prodDataBaseDogs = prodApi2(dataBaseDogs);
  const unprdApiDogs = (await axios.get(api)).data;
  const prdApiDogs = prodApi(unprdApiDogs);

  return [...prodDataBaseDogs, ...prdApiDogs];
};

const searchDogByName = async (name) => {
  const api = `${urlSource2}${name}`;

  const dataBaseDogs = await Dog.findAll({
    where: { name: { [Op.like]: `%${name}%` } },
  });
  const unprdApiDogs = (await axios.get(api)).data;
  const prdApiDogs = prodApi2(unprdApiDogs);

  return [...dataBaseDogs, ...prdApiDogs];
};

module.exports = { searchDogByName, searchAllDogs };

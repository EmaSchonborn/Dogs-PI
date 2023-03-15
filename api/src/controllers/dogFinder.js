const { Dog, Temper } = require("../db");
const axios = require("axios");
const urlSource = "https://api.thedogapi.com/v1/breeds";
const { YOUR_API_KEY } = process.env;

const prodApi = (array) => {
  return array.map((el) => {
    return {
      id: el.id,
      image: el.image.url,
      name: el.name,
      height: el.height.metric,
      weight: el.weight.metric,
      life_span: el.life_span,
      temperament: el.temperament,
    };
  });
};

const dogFinder = async (id, originDog) => {
  const api = `${urlSource}?api_key=${YOUR_API_KEY}`;
  const unprdApiDogs = (await axios.get(api)).data;
  const prdApiDogs = prodApi(unprdApiDogs);

  let idApiDogs = {};

  for (let i = 0; i < prdApiDogs.length; i++) {
    if (prdApiDogs[i]["id"] == id) {
      idApiDogs = prdApiDogs[i];
    }
  }

  const specificDog =
    originDog === "dataBase"
      ? await Dog.findByPk(id, {
          include: {
            model: Temper,
            attributes: ["name"],
          },
        })
      : idApiDogs;

  return specificDog;
};

module.exports = { dogFinder };

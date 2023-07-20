const { Temper } = require("../db");
const axios = require("axios");
const urlSource = "https://api.thedogapi.com/v1/breeds";
const { YOUR_API_KEY } = process.env;

const temperCreator = async () => {
  const api = `${urlSource}?api_key=${YOUR_API_KEY}`;
  const unfApiDogTemper = (await axios.get(api)).data;

  const apiDogTempers = unfApiDogTemper
    .map((dog) => {
      return dog.temperament;
    })
    .join()
    .split(",");

  for (let i = 0; i < apiDogTempers.length; i++) {
    apiDogTempers[i] = apiDogTempers[i].trim();
  }

  const arrTempers = apiDogTempers.filter((ob, index) => {
    return apiDogTempers.indexOf(ob) === index;
  });

  for await (const values of arrTempers) {
    await Temper.create({ name: values });
  }
};

async function showAllTempers() {
  if (Temper.findAll()) {
    await temperCreator();
    return await Temper.findAll();
  }
  return await Temper.findAll();
}

module.exports = { showAllTempers };

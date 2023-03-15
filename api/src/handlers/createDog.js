const { dogCreator } = require("../controllers/dogCreator.js");

const createDog = async (req, res) => {
  const { name, height, minWeight, maxWeight, life_span, temperament } =
    req.body;

  const weight = `${minWeight} - ${maxWeight}`;
  const averageWeight = (Number(minWeight) + Number(maxWeight)) / 2;
  try {
    const newDog = await dogCreator(
      name,
      height,
      weight,
      averageWeight,
      life_span,
      temperament
    );
    res.status(201).json(newDog);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

module.exports = createDog;

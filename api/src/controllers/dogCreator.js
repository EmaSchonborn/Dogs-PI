const { Dog, Temper } = require("../db");

const dogCreator = async (
  name,
  height,
  weight,
  averageWeight,
  life_span,
  temperament
) => {
  const newDog = await Dog.create({
    name,
    height,
    averageWeight,
    weight,
    life_span,
  });
  
  let asignedTemper = await Temper.findAll({
    where: { id: temperament },
  });

  newDog.addTemper(asignedTemper);

  return newDog;
};

module.exports = { dogCreator };

const { dogFinder } = require("../controllers/dogFinder");

const findDogById = async (req, res) => {
  const { id } = req.params;
  const originDog = isNaN(id) ? "dataBase" : "API";
  try {
    const specificDog = await dogFinder(id, originDog);
    if (specificDog === null)
      throw new Error("No se ha encontrado el perro buscado");
    res.status(200).json(specificDog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = findDogById;

const {
  searchDogByName,
  searchAllDogs,
} = require("../controllers/dogExplorer");

const findDogs = async (req, res) => {
  const { name } = req.query;

  try {
    const newDogs = name ? await searchDogByName(name) : await searchAllDogs();
    if (newDogs.length === 0)
      throw new Error("No se ha encontrado el perro buscado");
    res.status(200).json(newDogs);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = findDogs;

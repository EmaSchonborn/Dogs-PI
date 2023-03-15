const { showAllTempers } = require("../controllers/temperAPIDB");

const findTemper = async (req, res) => {
  try {
    const allTempers = await showAllTempers();

    res.status(200).json(allTempers);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = findTemper;

const { Router } = require("express");
const dogsRouter = Router();
const findDog = require("../handlers/findDog");
const findDogById = require("../handlers/findDogById");
const createDog = require("../handlers/createDog");

const validEntry = (req, res, next) => {
  const { name, height, minWeight, maxWeight, life_span } = req.body;

  if (!name) return res.status(400).send("Missing name");
  if (!height) return res.status(400).send("Missing height");
  if (!minWeight) return res.status(400).send("Missing minimum weight");
  if (!maxWeight) return res.status(400).send("Missing maximum weight");
  if (!life_span) return res.status(400).send("Missing life_span");

  next();
};

dogsRouter.get("/", findDog);

dogsRouter.get("/:id", findDogById);

dogsRouter.post("/", validEntry, createDog);

module.exports = dogsRouter;

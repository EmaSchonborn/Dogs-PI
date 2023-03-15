const { Router } = require("express");
const temperRouter = Router();
const findTemper = require("../handlers/findTemper");

temperRouter.get("/", findTemper);

module.exports = temperRouter;

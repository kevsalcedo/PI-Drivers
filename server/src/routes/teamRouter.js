const { Router } = require("express");
const {getTeamsHandler} = require("../handlers/teamsHandler")

const teamRouter = Router();

teamRouter.get("/", getTeamsHandler);

module.exports = teamRouter;
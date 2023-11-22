const { Router } = require("express");
const { getDriversHandler, getDriverByIdHandler, createDriverHandler } = require("../handlers/driversHandler")

const driverRouter = Router();

const driverValidate = (req, res, next) => {
  const { forename, surname, description, image, nationality, dob } = req.body;

  if (!forename) return res.status(400).json({ error: "Missing forename" });
  if (!surname)
    return res.status(400).json({ error: "Missing surname" });
  if (!description) return res.status(400).json({ error: "Missing description" });
  if (!image) return res.status(400).json({ error: "Missing image" });
  if (!nationality) return res.status(400).json({ error: "Missing nationality" });
  if (!dob) return res.status(400).json({ error: "Missing dob" });

  next();
};

driverRouter.get("/", getDriversHandler);

driverRouter.get("/:idDriver", getDriverByIdHandler);

driverRouter.post("/", driverValidate, createDriverHandler);

module.exports = driverRouter;
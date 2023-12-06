const {
  getAllDrivers,
  getDriverByName,
  getDriverById,
  createDriver,
} = require("../controllers/driversController");

const getDriversHandler = async (req, res) => {
  const { "name.forename": forename } = req.query;

  try {
    const result = forename
      ? await getDriverByName(forename)
      : await getAllDrivers();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDriverByIdHandler = async (req, res) => {
  const { idDriver } = req.params;
  
  const source = isNaN(idDriver) ? "bdd" : "api";

  try {
    const driver = await getDriverById(source, idDriver);
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createDriverHandler = async (req, res) => {
  try {
    const { forename, surname, description, image, nationality, dob, teamName } =
      req.body;

    const newDriver = await createDriver(
      forename,
      surname,
      description,
      image,
      nationality,
      dob,
      teamName
    );

    res.status(201).json(newDriver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDriversHandler,
  getDriverByIdHandler,
  createDriverHandler,
};

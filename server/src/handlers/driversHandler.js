const {
  getAllDrivers,
  getDriverByName,
  getDriverById,
  createDriver,
} = require("../controllers/driversController");

const getDriversHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const result = name ? await getDriverByName(name) : await getAllDrivers();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDriverByIdHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "bdd" : "api";

  try {
    const driver = await getDriverById(source, id);
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createDriverHandler = async (req, res) => {
  try {
    const { forename, surname, description, image, nationality, dob } =
      req.body;

    const newDriver = await createDriver(
      forename,
      surname,
      description,
      image,
      nationality,
      dob
    );

    res.status(200).json(newDriver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDriversHandler,
  getDriverByIdHandler,
  createDriverHandler,
};

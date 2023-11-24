const { Driver } = require("../db");
const Sequelize = require('sequelize');
const axios = require("axios");

const getAllApiDrivers = async () => {
  let drivers = [];

  let response = (await axios.get("http://localhost:5000/drivers")).data;

  drivers.push(response);

  const finalResult = [].concat.apply([], drivers);
  return finalResult;
};

const cleanArray = (arr) => {
  const clean = arr.map((elem) => {
    return {
      id: elem.id,
      forename: elem?.name?.forename,
      surname: elem?.name?.surname,
      description: elem?.description,
      image: elem?.image?.url,
      nationality: elem?.nationality,
      dob: elem?.dob,
      created: false,
    };
  });
  return clean;
};

const getAllDrivers = async () => {
  const bddDrivers = await Driver.findAll();

  let apiDriversRow = await getAllApiDrivers();

  const apiDrivers = cleanArray(apiDriversRow);

  return [...bddDrivers, ...apiDrivers];
};

const getDriverById = async (source, id) => {
  const driver =
    source === "bdd"
      ? await Driver.findByPk(id)
      : (await axios.get(`http://localhost:5000/drivers/${id}`)).data;

  console.log("source",source);

  if (!driver) throw new Error("El driver no existe");
  return driver;
};

const getDriverByName = async (forename) => {
  const bddDrivers = await Driver.findAll({
    where: {
      forename: {
        [Sequelize.Op.iLike]: `%${forename}%`,
      },
    },
    limit: 15,
  });

  let apiDriversRow = await getAllApiDrivers();

  const apiDrivers = cleanArray(apiDriversRow);

  const filteredApi = apiDrivers.filter((driver) =>
    driver.forename.toLowerCase().includes(forename.toLowerCase())
  );

  const remainingSlots = Math.max(0, 15 - bddDrivers.length);

  const selectedApiDrivers = filteredApi.slice(0, remainingSlots);

  return [...bddDrivers, ...selectedApiDrivers];
};

const createDriver = async (
  forename,
  surname,
  description,
  image,
  nationality,
  dob
) => {
  return await Driver.create({
    forename,
      surname,
      description,
      image,
      nationality,
      dob
  })
};

module.exports = {
  getAllDrivers,
  getDriverByName,
  getDriverById,
  createDriver,
};

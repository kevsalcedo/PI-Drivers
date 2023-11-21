const { Driver } = require("../db");

const getAllApiDrivers = async () => {
    let drivers = [];

    let response = (
        await get('http://localhost:5000/drivers')
    ).data.drivers;

    drivers.push(response);

    const finalResult = [].concat.apply([], games);
    return finalResult;
}

const cleanArray = (arr) => {
    const clean = arr.map((elem) => {
      return {
        id: elem.id,
        forename: elem?.name.forename,
        surname: elem?.name.surname,
        description: elem?.description,
        image: elem?.image.url,
        nationality: elem?.nationality,
        dob: elem?.dob,
        created: false,
      };
    });
    return clean;
  };

const getAllDrivers = async () => {
    const bddDrivers = await Driver.findAll();

    let apiDrivers = await getAllApiDrivers();
}

const getDriverByName = (name) => {
    
}

const getDriverById = (source, id) => {
    
}

const createDriver = () => {

}

module.exports = {
    getAllDrivers,
    getDriverByName,
    getDriverById,
    createDriver,
  };
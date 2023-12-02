const axios = require("axios");
const { Team } = require("../db");

const getAllApiTeams = async () => {
  let teams = [];

  let response = (await axios.get("http://localhost:5000/drivers")).data;

  teams.push(response);

  const finalResult = [].concat.apply([], teams);
  return finalResult;
};

const cleanArray = (arr) => {
  const clean = arr.map((elem) => {
    return {
      id: elem?.id,
      teams: elem?.teams,
      created: false,
    };
  });
  return clean;
};

const storeTeamsInDB = async (teams) => {
  try {
    // Filtra los equipos que tienen un nombre no nulo y obtiene equipos únicos
    const uniqueTeams = [
      ...new Set(
        teams.flatMap((team) =>
          team.teams
            ? team.teams.split(",").map((teamName) => teamName.trim()) // Elimina espacios al principio y al final de cada nombre
            : []
        )
      ),
    ];

    if (uniqueTeams.length > 0) {
      await Team.bulkCreate(
        uniqueTeams.map((teamName) => ({ name: teamName })),
        {
          updateOnDuplicate: ["name"],
        }
      );
      console.log("Equipos almacenados en la base de datos con éxito.");
    } else {
      console.log(
        "No hay equipos con nombres válidos para almacenar en la base de datos."
      );
    }
  } catch (error) {
    console.error(
      "Error al almacenar equipos en la base de datos:",
      error.message
    );
  }
};

const getAllTeams = async () => {
  const bddTeams = await Team.findAll();

  if (bddTeams.length) return bddTeams;
  else {
    let apiTeamsRow = await getAllApiTeams();

    const apiTeams = cleanArray(apiTeamsRow);

    await storeTeamsInDB(apiTeams);

    return [...bddTeams, ...apiTeams];
  }
};

module.exports = { getAllTeams };

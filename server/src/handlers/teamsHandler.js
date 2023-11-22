const { getAllTeams} = require("../controllers/teamsController")

const getTeamsHandler = async (req, res) => {
    const result = await getAllTeams();

    try {
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = {
    getTeamsHandler
}
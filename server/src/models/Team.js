const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Team",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      teamName: {
        type: DataTypes.STRING /* ARRAY(DataTypes.STRING) */,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

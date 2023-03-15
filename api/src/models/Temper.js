const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Temper = sequelize.define(
    "temper",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};

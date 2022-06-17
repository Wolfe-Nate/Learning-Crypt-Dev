const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class People extends Model {}

People.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isUrl: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    people_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "people",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "people",
  }
);

module.exports = People;

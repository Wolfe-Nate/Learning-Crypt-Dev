const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Lexicon extends Model {}

Lexicon.init(
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
    description {
      type: DataTypes.STRING,
      references: {
        model: "user",
        key: "id",
      },
    },
    lexicon_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "lexicon",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "lexicon",
  }
);

module.exports = Lexicon;
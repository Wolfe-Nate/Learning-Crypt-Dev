const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Basics extends Model {}

Basics.init(
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
<<<<<<< HEAD
    description: {
      type: DataTypes.STRING,
      references: {
        model: "user",
        key: "id",
      },
    },
=======
    // description: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: "user",
    //     key: "id",
    //   },
    // },
>>>>>>> 2e8381d34327670476f1844b14caa4f94d9dde3b
    // basics_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "basics",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "basics",
  }
);

module.exports = Basics;

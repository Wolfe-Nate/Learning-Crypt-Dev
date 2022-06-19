// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Basics extends Model {}

// Basics.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isUrl: true,
//       },
//     },
//     // description: {
//     //   type: DataTypes.STRING,
//     //   references: {
//     //     model: "user",
//     //     key: "id",
//     //   },
//     // },
//     // basics_id: {
//     //   type: DataTypes.INTEGER,
//     //   references: {
//     //     model: "basics",
//     //     key: "id",
//     //   },
//     // },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "basics",
//   }
// );

// module.exports = Basics;

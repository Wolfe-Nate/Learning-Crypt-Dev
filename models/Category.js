// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Category extends Model {}

// Category.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: true,
//       primaryKey: true,
//     },
//     // bitcoin_focus: {
//     //   type: DataTypes.BOOLEAN,
//     //   primaryKey: true,
//     //   allowNull: false,
//     // },
//     // eth_focus: {
//     //   type: DataTypes.BOOLEAN,
//     //   primaryKey: true,
//     //   allowNull: false,
//     // },
//     // alt_coin: {
//     //   type: DataTypes.BOOLEAN,
//     //   primaryKey: true,
//     //   allowNull: false,
//     // },
//     // crypto_tech: {
//     //   type: DataTypes.BOOLEAN,
//     //   primaryKey: true,
//     //   allowNull: false,
//     // },
//     content_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "content",
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "category",
//   }
// );

// module.exports = Category;

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Content extends Model {}

Content.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    article_url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isUrl: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    // bitcoin: {
    //   type: DataTypes.BOOLEAN,
    //   references: {
    //     model: "category",
    //     key: "bitcoin_focus",
    //   },
    // },
    // eth: {
    //   type: DataTypes.BOOLEAN,
    //   references: {
    //     model: "category",
    //     key: "eth_focus",
    //   },
    // },
    // alt: {
    //   type: DataTypes.BOOLEAN,
    //   references: {
    //     model: "category",
    //     key: "alt_coin",
    //   },
    // },
    // tech: {
    //   type: DataTypes.BOOLEAN,
    //   references: {
    //     model: "category",
    //     key: "crypto_tech",
    //   },
    // },
    // category_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "category",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "content",
  }
);

module.exports = Content;

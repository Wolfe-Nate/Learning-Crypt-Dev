const sequelize = require("../config/connection");
// const { User, Category, Content } = require("../models");

const seedUser = require("./userData");
const seedContent = require("./contentData");
// const seedCategory = require("./categoryData");

// const seedDatabase = async () => {
//     await sequelize.sync({ force: true });

//     const users = await User.bulkCreate(userData,
//         {
//             individualHooks: true,
//             returning: true,
//         });

//         for (const content )
// }

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedContent();

  // await seedCategory();

  process.exit(0);
};

seedAll();

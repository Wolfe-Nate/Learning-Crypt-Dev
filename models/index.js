const User = require("./user");
const Content = require("./Content");
const Category = require("./Category");
const Vote = require("./Vote");
// const Basics = require("./Basics");
// const Lexicon = require("./Lexicon");
// const People = require("./People");

// content belongs to a user - one to one relationshiop
// content is going to be the source model, pass to has one is the target model, the foreignKey is defined in the target model
Content.hasOne(User, {
  foreignKey: "content_id",
  onDelete: "CASCADE",
});

// Content has one categories
Content.hasOne(Category, {
  foreignKey: "content_id",
});

// // user can have many content/posts = one to many relationship
// User.hasMany(Content, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// // content belongs to many upvotes = (contentTracker)
// Content.belongsToMany(User, {
//   through: {
//     model: Vote,
//     unique: false,
//   },
// });

// // User belongs to many
// User.belongsToMany(Content, {
//   through: {
//     model: Vote,
//     unique: false,
//   },
// });

module.exports = { User, Content, Category, Vote };

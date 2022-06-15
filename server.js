const express = require("express");
const routes = require("/routes");
const sequelize = require(".config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turns on routes
app.use(routes);

// turns on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening to the smooth melodies at ${PORT}`)
  );
});

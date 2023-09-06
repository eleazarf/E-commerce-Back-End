const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// synchronizes your Sequelize models with the database and starts an Express.js server to handle incoming requests.
sequelize.sync({force: false})
  .then(() =>{
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  });
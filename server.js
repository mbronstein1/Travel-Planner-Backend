const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

//middleware for post methods to be able to encode and read data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// initialize routes
app.use(routes)

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`))
});
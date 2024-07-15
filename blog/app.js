// import modules 
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs')

// get routes 
const routes = require('./server/routes/recipeRoutes.js');
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`APP is listening to ${PORT}`)
})

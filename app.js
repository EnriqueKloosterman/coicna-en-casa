const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();
require('./src/database/config')

const port = process.env.PORT || 3001;

const app = express();

//RUTAS
const mainRouter = require('./src/routes/mainRoutes');
const recipeRouter = require('./src/routes/recipeRoutes');

app.set('views', path.resolve(__dirname, 'src/views'));
app.set('view engine', 'ejs');

const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(expressLayouts);

app.set('layout', './layouts/main')

app.use('/', mainRouter);
app.use('/', recipeRouter);

app.use((req, res, next) => {
    res.status(404).render('404', {title: 'Doohh! Marge no esta en la cocina!!!'})
    next();
});

app.listen(port, () => {
    console.log(`aplicacion corriendo de 10 en el puerto ${port}`)
});

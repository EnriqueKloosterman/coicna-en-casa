const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('db conectada'))
    .catch(e => console.log('fallo la coneccion ' + e));
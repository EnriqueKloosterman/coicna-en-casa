const express = require('express');
const path = require('path');
const Category = require('../database/models/Category');
const Recipe = require('../database/models/Recipe');


const mainController = {
    index: async (req, res) =>{
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        const carnes = await Recipe.find({'category': 'Carnes'}).limit(limitNumber);
        const ensaladas = await Recipe.find({'category': 'Ensaladas'}).limit(limitNumber);
        const masas = await Recipe.find({'category': 'Masas'}).limit(limitNumber);


        const food = {latest, carnes, ensaladas, masas};

        res.render('index', {title: 'Cocina en casa', categories, food});
    },


    
}

module.exports = mainController;



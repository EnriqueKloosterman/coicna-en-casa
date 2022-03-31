const express = require('express');
const path = require('path');
const Category = require('../database/models/Category');
const Recipe = require('../database/models/Recipe');

const limitNumber = 20;

const recipeController = {
    // categories
    categories: async (req, res) => {
        try{
            const categories = await Category.find({}).limit(limitNumber);
            res.render('recipes/categories', {title: 'Cocina en casa - Categorias', categories})
        }
        catch(err){
            console.log(`la cagaste en: ${err}`);
        }
    },
    // categories by id 
    categoriesId: async (req, res) => {
        try{
            let categoryId = req.params.id;
            const categoryById = await Recipe.find({'category': categoryId}).limit(limitNumber);
            res.render('recipes/categories', {title: 'Cocina en casa - Categorias', categoryById})
        }
        catch(err){
            console.log(`la cagaste en: ${err}`);
        }
    },
    //recipes by id
    receta: async (req, res) => {
        try{
            let recipeId = req.params.id;
            const recipe = await Recipe.findById(recipeId);
            res.render('recipes/receta', {title: 'Cocina en casa - Receta', recipe})
        }
        catch(err){
            console.log(`la cagaste en: ${err}`);
        }
    },
    // Recipe search
    searchRecipes: async (req, res) => {
        try{
            let searchTerm = req.body.searchTerm;
            let recipe = await  Recipe.find({$text:{ $search: searchTerm, $diacriticSensitive: true }});
            res.render('recipes/search', {title: 'Cocina en casa - Busqueda', recipe})
        }
        catch(err){
            console.log(`la cagaste en: ${err}`);
        }
    },
    // Ultimas recetas
    exploreLatest: async (req, res) => {
        try{
            const recipe = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
            res.render('recipes/exploreLatest', {title: 'Cocina en casa - Ultimas Recetas', recipe })
        }
        catch(err){
            console.log(`la cagaste en: ${err}`);
        }
    },
    // receta al azar
    randomRecipe: async (req, res) => {
        try{
            let count = await Recipe.find({}).countDocuments();
            let random = Math.floor(Math.random() * count);
            let recipe = await Recipe.findOne().skip(random).exec();
            res.render('recipes/randomRecipe' , {title: 'Cocina en casa - Receta aleatoria', recipe})
        }
        catch(err){
            console.log(`la cagaste en: ${err}`);
        }
    },
    // form para Cargar receta
    submitRecipe: async (req, res) => {
        try {

            const categories = await Category.find({})
            res.render('recipes/submitRecipe', {categories})
        } 
        catch (err) {
            console.log(`la cagaste en: ${err}`);
        }
    },
    //Cragar la receta
    uploadRecipe: async (req, res) => {
        try {
            const newRecipe = new Recipe({
                email: req.body.email,
                name: req.body.name,
                description: req.body.description,
                ingredients: req.body.ingredients,
                category: req.body.category ,
                image: req.file.originalname
            })
            await newRecipe.save();
            return res.redirect('recipe/' + newRecipe._id);
        } 
        catch (err) {
            res.send(err)
            console.log(`cagaste el upload  en: ${err}`);
        }
    }
}




module.exports = recipeController;



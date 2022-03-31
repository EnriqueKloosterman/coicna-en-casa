const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: Array,
        required:  true
    },
    email:{
        type: String,
        required: true
    },
    ingredients:{
        type: Array,
        required: true
    },
    category:{
        type: String,
        // enum: ['Americana', 'China', 'Española', 'India', 'Mejicana', 'Tailandesa'],
        enum: ['Carnes', 'Ensaladas', 'Masas', 'Pastas', 'Postres', 'Vegetarianas'],
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
recipeSchema.index({ name: 'text', description: 'text' });
// recipeSchema.index({ '$**' : 'text'})

module.exports = mongoose.model('Recipe', recipeSchema);
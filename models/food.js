const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
	name: String
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food;
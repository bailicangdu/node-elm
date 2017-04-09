'use strict';

import mongoose from 'mongoose'

const foodSchema = new mongoose.Schema({
	name: String
})

const Food = mongoose.model('Food', foodSchema)

export default Food
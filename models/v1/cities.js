'use strict';

import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
	id: Number,
	name: String,
	abbr: String,
	area_code: String,
	sort: Number,
	latitude: Number,
	longitude: Number,
	is_map: Boolean,
	pinyin: String,
});

citySchema.statics.cityGuess = async (name) => {
	try{
		let city = await this.find();
		city.entries.forEach(item => {
			
		})
	}catch(err){
		console.error(err);
	}

}


const Cities = mongoose.model('Cities', citySchema);

export default Cities
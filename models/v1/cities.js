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

citySchema.statics.cityGuess = function(name){
	return new Promise(async (resolve, reject) => {
		const firtWord = name.substr(0,1).toUpperCase();
		try{
			const city = await this.findOne();
			Object.entries(city._doc).forEach(item => {
				if(item[0] == firtWord){
					item[1].forEach(cityItem => {
						if (cityItem.pinyin == name) {
							resolve(cityItem)
						}
					})
				}
			})
		}catch(err){
			console.error(err);
		}
	})
}

citySchema.statics.cityHot = function (){
	return new Promise(async (resolve, reject) => {
		try{
			const city = await this.findOne();
			resolve(city._doc.hotCities)
		}catch(err){
			console.error(err);
		}
	})
}

citySchema.statics.cityGroup = function (){
	return new Promise(async (resolve, reject) => {
		try{
			const city = await this.findOne();
			let cityObj = city._doc;
			delete(cityObj._id)
			delete(cityObj.hotCities)
			resolve(cityObj)
		}catch(err){
			console.error(err);
		}
	})
}

const Cities = mongoose.model('Cities', citySchema);

export default Cities
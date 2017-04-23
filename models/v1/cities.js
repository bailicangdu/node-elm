'use strict';

import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
	data: {
		type: [{
			id: Number,
			name: String,
			abbr: String,
			area_code: String,
			sort: Number,
			latitude: Number,
			longitude: Number,
			is_map: Boolean,
			pinyin: String,
		}]
	}
});

const Cities = mongoose.model('Cities', citySchema);

export default Cities
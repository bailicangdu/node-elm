'use strict';

import mongoose from 'mongoose'
import entryData from '../../InitData/entry'

const Schema = mongoose.Schema;

const entrySchema = new Schema({
	id: Number,
	is_in_serving: Boolean,
	description: String,
	title: String,
	link: String,
	image_url: String,
	icon_url: String,
	title_color: String
});

const Entry = mongoose.model('Entry', entrySchema)

Entry.findOne((err, data) => {
	if (!data) {
		for (let i = 0; i < entryData.length; i++) {
			Entry.create(entryData[i]);
		}
	}
})

export default Entry
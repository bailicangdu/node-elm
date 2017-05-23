'use strict';

import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const foodSchema = new Schema({
	rating: {type: Number, default: 0},
	is_featured: {type: Number, default: 0},
	restaurant_id: {type: Number, isRequired: true},
	category_id: {type: Number, isRequired: true},
	pinyin_name: {type: String, default: ''},
	display_times: {type: Array, default: []},
	attrs: {type: Array, default: []},
	description: {type: String, default: ""},
	month_sales: {type: Number, default: 0},
	rating_count: {type: Number, default: 0},
	tips: String,
	image_path: String,
	specifications: [Schema.Types.Mixed],
	server_utc: {type: Date, default: Date.now()},
	is_essential: {type: Boolean, default: false},
	attributes: {type: Array, default: []},
	item_id: {type: Number, isRequired: true},
	limitation: Schema.Types.Mixed,
	name: {type: String, isRequired: true},
	satisfy_count: {type: Number, default: 0},
	activity: Schema.Types.Mixed,
	satisfy_rate: {type: Number, default: 0},
	specfoods: [{
		original_price: {type: Number, default: 0},
		sku_id: {type: Number, isRequired: true},
		name: {type: String, isRequired: true},
		pinyin_name: {type: String, default: ""},
		restaurant_id: {type: Number, isRequired: true},
		food_id: {type: Number, isRequired: true},
		packing_fee: {type: Number, default: 0},
		recent_rating: {type: Number, default: 0},
		promotion_stock: {type: Number, default: -1},
		price: {type: Number, default: 0},
		sold_out: {type: Boolean, default: false},
		recent_popularity: {type: Number, default: 0},
		is_essential: {type: Boolean, default: false},
		item_id: {type: Number, isRequired: true},
		checkout_mode: {type: Number, default: 1},
		stock: {type: Number, default: 1000},
		specs_name: String,
		specs: [
			{
				name: String,
				value: String
			}
		]
	}]
})

foodSchema.index({item_id: 1});

const menuSchema = new Schema({
	description: String,
	is_selected: {type: Boolean, default: true},
	icon_url: {type: String, default: ''},
	name: {type: String, isRequired: true},
	id:  {type: Number, isRequired: true},
	restaurant_id: {type: Number, isRequired: true},
	type: {type: Number, default: 1},
	foods: [foodSchema]
});

menuSchema.index({ id: 1 });

const Food = mongoose.model('Food', foodSchema);

const Menu = mongoose.model('Menu', menuSchema);

export {Food, Menu}
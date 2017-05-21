'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const orderSchema = new Schema({
	basket: {
		abandoned_extra: [
			{
				category_id: Number,
				name: {type: String, default: ''},
				price: {type: Number, default: 0},
				quantity: {type: Number, default: 0},
			}
		],
		deliver_fee: {
			category_id: {type: Number, default: 2},
			name: {type: String, default: '配送费'},
			price: {type: Number, default: 4},
			quantity: {type: Number, default: 1},
		},
		extra: [],
		group: [
			[
				{
					attrs: [],
					new_specs: [],
					name: String,
					price: Number,
					quantity: Number,
					specs: [String]
				}
			]
		],
		packing_fee: {
			category_id: {type: Number, default: 1},
			name: {type: String, default: '餐盒'},
			price: Number,
			quantity: Number
		},
		pindan_map: []
	},
	formatted_created_at: String,
	order_time: Number,
	time_pass: Number,
	id: Number,
	is_brand: {type: Number, default: 0},
	is_deletable: {type: Number, default: 1},
	is_new_pay: {type: Number, default: 1},
	is_pindan: {type: Number, default: 0},
	operation_confirm: {type: Number, default: 0},
	operation_pay: {type: Number, default: 0},
	operation_rate: {type: Number, default: 0},
	operation_rebuy: {type: Number, default: 2},
	operation_upload_photo: {type: Number, default: 0},
	pay_remain_seconds: {type: Number, default: 0},
	rated_point: {type: Number, default: 0},
	remind_reply_count: {type: Number, default: 0},
	restaurant_id: Number,
	restaurant_image_hash: String,
	restaurant_image_url: String,
	restaurant_name: String,
	restaurant_type: {type: Number, default: 0},
	status_bar: {
		color: String,
		image_type: String,
		sub_title: String,
		title: String,
	},
	status_code: {type: Number, default: 0},
	timeline_node: {
		actions: [],
		description: String,
		in_processing: {type: Number, default: 0},
		sub_description: String,
		title: String,
	},
	top_show: {type: Number, default: 0},
	total_amount: Number,
	total_quantity: Number,
	unique_id: Number,
	user_id: Number,
	address_id: Number,
})

orderSchema.index({id: 1});

const Order = mongoose.model('Order', orderSchema);

export default Order
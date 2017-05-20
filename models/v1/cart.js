'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const cartSchema = Schema({
	id: Number,
	cart: {
		id: Number,
		groups: [
			[
				{
					attrs: [],
					extra: [],
					id: Number,
					new_specs: [],
					name: String,
					price: Number,
					quantity: Number,
					specs: [String],
					packing_fee: Number,
					sku_id: Number,
					stock: Number,
				}
			]
		],
		extra: [{
			description: String,
			name: {type: String, default: '餐盒'},
			price: {type: Number, default: 0},
			quantity: {type: Number, default: 0},
			type: {type: Number, default: 0},
		}],
		deliver_amount: Number,
		deliver_time: String,
		discount_amount: String,
		dist_info: String,
		is_address_too_far: {type: Boolean, default: false},
		is_deliver_by_fengniao: Boolean,
		is_online_paid: {type: Number, default: 1},
		is_ontime_available: {type: Number, default: 0},
		must_new_user: {type: Number, default: 0},
		must_pay_online: {type: Number, default: 0},
		ontime_status: {type: Number, default: 0},
		ontime_unavailable_reason: String,
		original_total: Number,
		phone: String,
		promise_delivery_time: {type: Number, default: 0},
		restaurant_id: Number,
		restaurant_info: Schema.Types.Mixed,
		restaurant_minimum_order_amount: Number,
		restaurant_name_for_url: String,
		restaurant_status: {type: Number, default: 1},
		service_fee_explanation: {type: Number, default: 0},
		total: Number,
		user_id: Number,
	},
	delivery_reach_time: String,
	invoice: {
		is_available: {type: Boolean, default: false},
		status_text: String,
	},
	sig: String,
	current_address: {},
	payments: [{
		description: String,
		disabled_reason: String,
		id: Number,
		is_online_payment: {type: Boolean, default: true},
		name: String,
		promotion:[],
		select_state: Number,
	}],
	deliver_times: [],
	deliver_times_v2: [],
	merchant_coupon_info: {},
	number_of_meals: {},
	discount_rule: {},
	hongbao_info: {},
	is_support_coupon: {type: Boolean, default: false},
	is_support_ninja: {type: Number, default: 1},
})

cartSchema.index({id: 1});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart
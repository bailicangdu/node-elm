'use strict';

import mongoose from 'mongoose'

const shopSchema = new mongoose.Schema({
	activities: [{
		description: String,
		icon_color: String,
		icon_name: String,
		id: Number,
		name: String,
	}],
	address: String,
	delivery_mode: {
		color: String,
		id: Number,
		is_solid: Boolean,
		text: String
	},
	description: { type: String, default: "" },
	order_lead_time: { type: String, default: "" },
	distance: { type: String, default: "" },
	location:{type:[Number],index: '2d'},
	float_delivery_fee: { type: Number, default: 0 },
	float_minimum_order_amount: { type: Number, default: 0 },
	id: Number,
	category: String,
	identification: {
		company_name: { type: String, default: "" },
		identificate_agency: { type: String, default: "" },
		identificate_date: { type: Date, default: Date.now },
		legal_person: { type: String, default: "" },
		licenses_date: { type: String, default: "" },
		licenses_number: { type: String, default: "" },
		licenses_scope: { type: String, default: "" },
		operation_period: { type: String, default: "" },
		registered_address: { type: String, default: "" },
		registered_number: { type: String, default: "" },
	},
	image_path: { type: String, default: "" },
	is_premium: { type: Boolean, default: false },
	is_new: { type: Boolean, default: false },
	latitude: Number,
	longitude: Number,
	license: {
		business_license_image: { type: String, default: "" },
		catering_service_license_image: { type: String, default: "" },
	},
	name: {
        type: String,
        required: true 
    },
	opening_hours: { type: Array, default: ["08:30/20:30"] },
	phone: {
        type: String,
        required: true 
    },
	piecewise_agent_fee: {
		tips: String
	},
	promotion_info: { type: String, default: "欢迎光临，用餐高峰请提前下单，谢谢" },
	rating: { type: Number, default: 0 },
	rating_count: { type: Number, default: 0 },
	recent_order_num: { type: Number, default: 0 },
	status: { type: Number, default: 0 },
	supports: [{
		description: String,
		icon_color: String,
		icon_name: String,
		id: Number,
		name: String
	}],
});

shopSchema.index({ id: 1 }); //primary_key 主键

const Shop = mongoose.model('Shop', shopSchema);

export default Shop
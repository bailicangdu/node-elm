'use strict';

import ShopModel from '../../models/shopping/shop';
import BaseComponent from '../../prototype/baseComponent'

class Shop extends BaseComponent{
	constructor(){
		super()
	}
	async addShop(req, res, next){
		const ifHas = await ShopModel.findOne();
		if (ifHas) {
			res.send(ifHas)
			return
		}
		const newShop = new ShopModel({
			name: "萨伦意大利冰淇淋",
			address: "上海市闵行区颛桥镇鑫都路2508号302-1",
			description: '',
			float_delivery_fee: 5,
			float_minimum_order_amount: 20,
			id: 1825954,
			is_premium: false,
			is_new: false,
			latitude: 31.056997,
			longitude: 121.396113,
			opening_hours: ["10:30/20:30"],
			phone: "15921357769",
			promotion_info: "欢迎光临，用餐高峰请提前下单，谢谢",
			rating: 4.8,
			rating_count: 34,
			recent_order_num: 61,
			status: 0,
			image_path: "287de218d8026a725bda5a00e274db7cjpeg",
			piecewise_agent_fee: {
				tips: "配送费约¥5"
			},
			delivery_mode: {
				color: "57A9FF",
				id: 1,
				is_solid: true,
				text: "蜂鸟专送"
			},
			activities: [{
				description: '满30减5，满60减8',
				icon_color: "f07373",
				icon_name: "减",
				id: 26393397,
				name: "满减优惠",
			}],
			supports: [{
				description: "已加入“外卖保”计划，食品安全有保障",
				icon_color: "999999",
				icon_name: "保",
				id: 7,
				name: "外卖保"
			}],
			license: {
				business_license_image: "3c982023d49d68caf61f41a156626426jpeg",
				catering_service_license_image: "db299ee4218ed72c188bf59ba306868ejpeg",
			},
			identification: {
				company_name: "上海市闵行区茹琪饮品店",
				identificate_agency: "",
				identificate_date: "2016-10-10T00:00:00+0800",
				legal_person: "",
				licenses_date: "",
				licenses_number: "JY23101120002977",
				licenses_scope: "",
				operation_period: "",
				registered_address: "上海市闵行区鑫都路2508号302-1",
				registered_number: "",
			},
		});
		const saveData = await newShop.save();
		res.send(saveData)
	}
}

export default new Shop()
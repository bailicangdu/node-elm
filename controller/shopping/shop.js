'use strict';

import ShopModel from '../../models/shopping/shop'
import AddressComponent from '../../prototype/addressComponent'
import formidable from 'formidable'

class Shop extends AddressComponent{
	constructor(){
		super()
		this.addShop = this.addShop.bind(this);
		this.getRestaurants = this.getRestaurants.bind(this);
	}
	async addShop(req, res, next){
		let restaurant_id;
		try{
			restaurant_id = await this.getId('restaurant_id');
		}catch(err){
			console.log('获取商店id失败');
			res.send({
				type: 'ERROR_DATA',
				message: '获取数据失败'
			})
			return
		}
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			try{
				if (!fields.name) {
					throw new Error('必须填写商店名称');
				}else if(!fields.address){
					throw new Error('必须填写商店地址');
				}else if(!fields.phone){
					throw new Error('必须填写联系电话');
				}else if(!fields.latitude || !fields.longitude){
					throw new Error('商店位置信息错误');
				}else if(!fields.image_path){
					throw new Error('必须上传商铺图片');
				}
			}catch(err){
				console.log('前台参数出错');
				res.send({
					status: 0,
					type: 'ERROR_PARAMS',
					message: err.message
				})
				return
			}
			const opening_hours = fields.startTime&&fields.endTime? fields.startTime + '/' + fields.endTime : "8:30/20:30";
			const newShop = {
				name: fields.name,
				address: fields.address,
				description: fields.description || '',
				float_delivery_fee: fields.float_delivery_fee || 0,
				float_minimum_order_amount: fields.float_minimum_order_amount || 0,
				id: restaurant_id,
				is_premium: fields.is_premium || false,
				is_new: fields.new || false,
				latitude: 31.056997,
				longitude: 121.396113,
				opening_hours: [opening_hours],
				phone: fields.phone,
				promotion_info: fields.promotion_info || "欢迎光临，用餐高峰请提前下单，谢谢",
				rating: (Math.random()*5).toFixed(1),
				rating_count: Math.ceil(Math.random()*1000),
				recent_order_num: Math.ceil(Math.random()*1000),
				status: Math.round(Math.random()),
				image_path: fields.image_path,
				piecewise_agent_fee: {
					tips: "配送费约¥" + (fields.float_delivery_fee || 0),
				},
				activities: [],
				supports: [],
				license: {
					business_license_image: fields.business_license_image || '',
					catering_service_license_image: fields.catering_service_license_image || '',
				},
				identification: {
					company_name: "",
					identificate_agency: "",
					identificate_date: "",
					legal_person: "",
					licenses_date: "",
					licenses_number: "",
					licenses_scope: "",
					operation_period: "",
					registered_address: "",
					registered_number: "",
				},
			}
			if (fields.delivery_mode) {
				Object.assign(newShop, {delivery_mode: {
					color: "57A9FF",
					id: 1,
					is_solid: true,
					text: "蜂鸟专送"
				}})
			}
			fields.activities.forEach((item, index) => {
				switch(item.icon_name){
					case '减': 
						item.icon_color = 'f07373';
						item.id = index + 1;
						break;
					case '特': 
						item.icon_color = 'EDC123';
						item.id = index + 1;
						break;
					case '新': 
						item.icon_color = '70bc46';
						item.id = index + 1;
						break;
					case '领': 
						item.icon_color = 'E3EE0D';
						item.id = index + 1;
						break;
				}
				newShop.activities.push(item);
			})
			if (fields.bao) {
				newShop.supports.push({
					description: "已加入“外卖保”计划，食品安全有保障",
					icon_color: "999999",
					icon_name: "保",
					id: 7,
					name: "外卖保"
				})
			}
			if (fields.zhun) {
				newShop.supports.push({
					description: "准时必达，超时秒赔",
					icon_color: "57A9FF",
					icon_name: "准",
					id: 9,
					name: "准时达"
				})
			}
			if (fields.piao) {
				newShop.supports.push({
					description: "该商家支持开发票，请在下单时填写好发票抬头",
					icon_color: "999999",
					icon_name: "票",
					id: 4,
					name: "开发票"
				})
			}
			try{
				const shop = new ShopModel(newShop);
				await shop.save();
				res.send({
					status: 1,
					shopDetail: newShop
				})
			}catch(err){
				console.log('商铺写入数据库失败');
				res.send({
					status: 0,
					type: 'ERROR_SERVER',
					message: '添加商铺失败',
				})
			}
		})
	}
	async getRestaurants(req, res, next){
		const {
			latitude,
			longitude,
			offset = 0,
			limit = 20,
			keyword,
			restaurant_category_id,
			order_by,
			extras,
			delivery_mode,
			restaurant_category_ids,
		} = req.query;
		try{
			if (!latitude) {
				throw new Error('latitude参数错误')
			}else if(!longitude){
				throw new Error('longitude参数错误');
			}
		}catch(err){
			res.send({
				status: 0,
				type: 'ERROR_PARAMS',
				message: err.message
			})
			return
		}
		const restaurants = await ShopModel.find().limit(Number(limit)).skip(Number(offset));
		res.send(restaurants)
	}
}

export default new Shop()
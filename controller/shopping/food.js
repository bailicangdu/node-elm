'use strict';

import FoodModel from '../../models/shopping/food'
import BaseComponent from '../../prototype/baseComponent'
import formidable from 'formidable'

class Food extends BaseComponent{
	constructor(){
		super()
		this.addFood = this.addFood.bind(this);
		this.getCategory = this.getCategory.bind(this);
		this.addCategory = this.addCategory.bind(this);
		this.uploadFoodImg = this.uploadFoodImg.bind(this);
	}
	async getCategory(req, res, next){
		const restaurant_id = req.params.restaurant_id;
		try{
			const category_list = await FoodModel.find({restaurant_id});
			res.send({
				status: 1,
				category_list,
			})

		}catch(err){
			console.log('获取餐馆食品种类失败');
			res.send({
				status: 0,
				type: 'ERROR_GET_DATA',
				message: '获取数据失败'
			})
		}
	}
	async addCategory(req, res, next){
		const form = new formidable.IncomingForm();
		let category_id;
		try{
			category_id = await this.getId('category_id');
		}catch(err){
			console.log('获取category_id失败');
			res.send({
				type: 'ERROR_DATA',
				message: '获取数据失败'
			})
			return
		}
		form.parse(req, async (err, fields, files) => {
			const foodObj = {
				name: fields.name,
				description: fields.description, 
				restaurant_id: fields.restaurant_id, 
				id: category_id,
			}
			const newFood = new FoodModel(foodObj);
			try{
				await newFood.save();
				res.send({
					status: 1,
					message: '添加食品种类成功',
				})
			}catch(err){
				console.log('保存数据失败');
				res.send({
					status: 0,
					type: 'ERROR_IN_SAVE_DATA',
					message: '保存数据失败',
				})
			}
		})
	}
	async addFood(req, res, next){
		res.send({a: 2})
		const newFood = 
		{
			description: "大家喜欢吃，才叫真好吃。",
			is_selected: true,
			icon_url: "5da3872d782f707b4c82ce4607c73d1ajpeg",
			name: "热销榜",
			id: 1,
			restaurant_id: 3,
			foods: [
				{
					rating: 4.3,
					restaurant_id: 154078098,
					description: "",
					month_sales: 262,
					rating_count: 86,
					tips: "86评价 月售262份",
					image_path: "8c4faa8342498a301c464711b6d8a8bcjpeg",
					item_id: "165472716078",
					name: "招牌豪大大鸡排（特大）",
					satisfy_count: 80,
					satisfy_rate: 93,
					category_id: 513873481,
					activity: null,
					attributes: [ ],
					specfoods: [
						{
							
							sku_id: "191809493294",
							name: "招牌豪大大鸡排（特大）",
							restaurant_id: 154078098,
							food_id: 577587396,
							packing_fee: 0,
							recent_rating: 4.3,
							price: 16,
							item_id: "165472716078",
							checkout_mode: 1,
							stock: 9862,
							specs: [
								{
									name: "规格",
									value: "招牌豪大大鸡排（特大）"
								}
							],
							is_essential: false,
							recent_popularity: 131,
							sold_out: false,
							promotion_stock: -1,
							original_price: null,
							pinyin_name: "zhaopaihaodadajipai（teda）",
						},
					],
					attrs: [
						{
							values: [
								"原味",
								"甘梅",
								"咖喱",
								"孜然",
								"番茄酱"
							],
							name: "口味"
						},
					],
					specifications: [
						{
							values: [
								"招牌豪大大鸡排（特大）",
								"默认"
							],
							name: "规格"
						}
					],
					is_essential: false,
					server_utc: 1494479869,
					is_featured: 0,
					pinyin_name: "zhaopaihaodadajipai（teda）",
					limitation: { },
					display_times: [ ],
				}
			]
		}
	}

	async uploadFoodImg(req, res, next){
		try{
			let path = await this.uploadImg(req, 'food');
			res.send({
				status: 1,
				image_path: path
			})
		}catch(err){
			res.send({
				type: 'ERROR_PATH',
				message: '上传头像失败',
				status: 0,
			})
		}
	}
}

export default new Food()
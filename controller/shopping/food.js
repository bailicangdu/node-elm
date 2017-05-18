'use strict';

import FoodModel from '../../models/shopping/food'
import BaseComponent from '../../prototype/baseComponent'
import formidable from 'formidable'

class Food extends BaseComponent{
	constructor(){
		super();
		this.defaultData = [{
			name: '热销榜',
			description: '大家喜欢吃，才叫真好吃。', 
			icon_url: "5da3872d782f707b4c82ce4607c73d1ajpeg",
			is_selected: true,
			type: 1,
		}, {
			name: '优惠',
			description: '美味又实惠, 大家快来抢!', 
			icon_url: "4735c4342691749b8e1a531149a46117jpeg",
			type: 1,
		}]
		this.initData = this.initData.bind(this);
		this.addFood = this.addFood.bind(this);
		this.getCategory = this.getCategory.bind(this);
		this.addCategory = this.addCategory.bind(this);
	}
	async initData(restaurant_id){
		for (let i = 0; i < this.defaultData.length; i++) {
			let category_id;
			try{
				category_id = await this.getId('category_id');
			}catch(err){
				console.log('获取category_id失败');
				throw new Error(err);
			}
			const defaultData = this.defaultData[i];
			const Category = {...defaultData, id: category_id, restaurant_id};
			const newFood = new FoodModel(Category);
			try{
				await newFood.save();
				console.log('初始化食品数据成功');
			}catch(err){
				console.log('初始化食品数据失败');
				throw new Error(err);
			}
		}
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
		form.parse(req, async (err, fields, files) => {
			try{
				if (!fields.name) {
					throw new Error('必须填写食品类型名称');
				}else if(!fields.restaurant_id){
					throw new Error('餐馆ID错误');
				}
			}catch(err){
				console.log('前台参数错误');
				res.send({
					status: 0,
					type: 'ERROR_PARAMS',
					message: err.message
				})
				return
			}
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
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			console.log(fields)
			try{
				if (!fields.name) {
					throw new Error('必须填写食品名称');
				}else if(!fields.image_path){
					throw new Error('必须上传食品图片');
				}else if(!fields.specs.length){
					throw new Error('至少填写一种规格');
				}else if(!fields.category_id){
					throw new Error('食品类型ID错误');
				}else if(!fields.restaurant_id){
					throw new Error('餐馆ID错误');
				}
			}catch(err){
				console.log('前台参数错误');
				res.send({
					status: 0,
					type: 'ERROR_PARAMS',
					message: err.message
				})
				return
			}
			let category;
			try{
				category = await FoodModel.findOne({id: fields.category_id});
			}catch(err){
				console.log('获取食品类型失败');
				res.send({
					status: 0,
					type: 'ERROR_DATA',
					message: '添加食品失败'
				})
				return
			}
			let item_id;
			try{
				item_id = await this.getId('item_id');
			}catch(err){
				console.log('获取item_id失败');
				res.send({
					status: 0,
					type: 'ERROR_DATA',
					message: '添加食品失败'
				})
				return
			}
			const rating_count = Math.ceil(Math.random()*1000);
			const month_sales = Math.ceil(Math.random()*1000);
			const tips = rating_count + "评价 月售" + month_sales + "份";
			const newFood = {
				name: fields.name,
				description: fields.description,
				image_path: fields.image_path,
				activity: null,
				attributes: [],
				restaurant_id: fields.restaurant_id,
				category_id: fields.category_id,
				satisfy_rate: Math.ceil(Math.random()*100),
				satisfy_count: Math.ceil(Math.random()*1000),
				item_id,
				rating: (Math.random()*5).toFixed(1),
				rating_count,
				month_sales,
				tips,
				specfoods: [],
				specifications: [],
			}
			if (fields.activity) {
				newFood.activity = {
					image_text_color: 'f1884f',
					icon_color: 'f07373',
					image_text: fields.activity,
				}
			}
			if (fields.attributes.length) {
				fields.attributes.forEach(item => {
					let attr;
					switch(item){
						case '新': 
							attr = {
								icon_color: '5ec452',
								icon_name: '新'
							}
							break;
						case '招牌': 
							attr = {
								icon_color: 'f07373',
								icon_name: '招牌'
							}
							break;
					}
					newFood.attributes.push(attr);
				})
			}
			if (fields.specs.length < 2) {

				let food_id, sku_id;
				try{
					sku_id = await this.getId('sku_id');
					food_id = await this.getId('food_id');
				}catch(err){
					console.log('获取sku_id、food_id失败');
					res.send({
						status: 0,
						type: 'ERROR_DATA',
						message: '添加食品失败'
					})
					return
				}
				newFood.specfoods.push({
					packing_fee: fields.specs[0].packing_fee,
					price: fields.specs[0].price,
					specs: [],
					name: fields.name,
					item_id,
					sku_id,
					food_id,
					restaurant_id: fields.restaurant_id,
					recent_rating: (Math.random()*5).toFixed(1),
					recent_popularity: Math.ceil(Math.random()*1000),
				})
			}else{
				newFood.specifications.push({
					values: [],
					name: "规格"
				})
				for (let i = 0; i < fields.specs.length; i++) {
					let food_id, sku_id;
					try{
						sku_id = await this.getId('sku_id');
						food_id = await this.getId('food_id');
					}catch(err){
						console.log('获取sku_id、food_id失败');
						res.send({
							status: 0,
							type: 'ERROR_DATA',
							message: '添加食品失败'
						})
						return
					}
					newFood.specfoods.push({
						packing_fee: fields.specs[i].packing_fee,
						price: fields.specs[i].price,
						specs: [{
							name: "规格",
							value: fields.specs[i].specs
						}],
						name: fields.name,
						item_id,
						sku_id,
						food_id,
						restaurant_id: fields.restaurant_id,
						recent_rating: (Math.random()*5).toFixed(1),
						recent_popularity: Math.ceil(Math.random()*1000),
					})
					newFood.specifications[0].values.push(fields.specs[i].specs);
				}
			}
			try{
				category.foods.push(newFood);
				category.markModified('foods');
				await category.save();
				res.send({
					status: 1,
					foodDetail: category,
				});
			}catch(err){
				console.log('保存食品到数据库失败', err);
				res.send({
					status: 0,
					type: 'ERROR_DATA',
					message: '添加食品失败'
				})
			}
		})
	}
	async getMenu(req, res, next){
		const restaurant_id = req.query.restaurant_id;
		if (!restaurant_id || !Number(restaurant_id)) {
			console.log('获取餐馆参数ID错误');
			res.send({
				status: 0,
				type: 'ERROR_PARAMS',
				message: '餐馆ID参数错误',
			})
			return
		}
		try{
			const menu = await FoodModel.find({restaurant_id, $where: function(){return this.foods.length}}, '-_id');
			res.send(menu);
		}catch(err){
			console.log('获取食品数据失败', err);
			res.send({
				status: 0,
				type: 'GET_DATA_ERROR',
				message: '获取食品数据失败'
			})
		}
	}
}

export default new Food()
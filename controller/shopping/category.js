'use strict';

import CategoryModel from '../../models/shopping/category'
import BaseComponent from '../../prototype/baseComponent'

class Category extends BaseComponent{
	constructor(){
		super()
	}
	//获取所有餐馆分类和数量
	async getCategories(req, res, next){
		try{
			const categories = await CategoryModel.find({}, '-_id');
			res.send(categories);
		}catch(err){
			console.log('获取categories失败');
			res.send({
				status: 0,
				type: 'ERROR_DATA',
				message: '获取categories失败'
			})
		}
	}
	async addCategory(type){
		try{
			await CategoryModel.addCategory(type)
		}catch(err){
			console.log('增加category数量失败');
		}
	}
}

export default new Category()
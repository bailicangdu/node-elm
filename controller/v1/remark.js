'use strict';

import BaseComponent from '../../prototype/baseComponent'
import RemarkModel from '../../models/v1/remark'

class Remark extends BaseComponent{
	constructor(){
		super()
	}
	async getRemarks(req, res, next){
		const cart_id = req.params.cart_id;
		if (!cart_id || !Number(cart_id)) {
			res.send({
				status: 0,
				type: 'ERROR_PARAMS',
				message: '购物车ID参数错误'
			})
			return 
		}
		try{
			const remarks = await RemarkModel.findOne({}, '-_id');
			res.send(remarks);
		}catch(err){
			console.log('获取备注数据失败',err);
			res.send({
				status: 0,
				type: 'ERROR_GET_DATA',
				message: '获取备注数据失败'
			})
		}
	}
}

export default new Remark()
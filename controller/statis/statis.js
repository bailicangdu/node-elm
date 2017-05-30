'use strict'

import StatisModel from '../../models/statis/statis'
import UserInfoModel from '../../models/v2/userInfo'
import OrderModel from '../../models/bos/order'
import dtime from 'time-formater'
import AdminModel from '../../models/admin/admin'

class Statis {
	constructor(){

	}
	async apiCount(req, res, next){
		const date = req.params.date;
		if (!date) {
			console.log('参数错误')
			res.send({
				status: 0,
				type: 'ERROR_PARAMS',
				message: '参数错误'
			})
			return
		}
		try{
			const count = await StatisModel.find({date}).count()
			res.send({
				status: 1,
				count,
			})
		}catch(err){
			console.log('获取当天API请求次数失败');
			res.send({
				status: 0,
				type: 'ERROR_GET_TODAY_API_COUNT',
				message: '获取当天API请求次数失败'
			})
		}
	}
	async apiAllCount(req, res, next){
		try{
			const count = await StatisModel.count()
			res.send({
				status: 1,
				count,
			})
		}catch(err){
			console.log('获取所有API请求次数失败');
			res.send({
				status: 0,
				type: 'ERROR_GET_ALL_API_COUNT',
				message: '获取所有API请求次数失败'
			})
		}
	}
	async allApiRecord(req, res, next){
		try{
			const allRecord = await StatisModel.find({}, '-_id -__v')
			res.send(allRecord)
		}catch(err){
			console.log('获取所有API请求信息失败');
			res.send({
				status: 0,
				type: 'GET_ALL_API_RECORD_DATA_FAILED',
				message: '获取所有API请求信息失败'
			})
		}
	}
	async userCount(req, res, next){
		const date = req.params.date;
		if (!date) {
			console.log('参数错误')
			res.send({
				status: 0,
				type: 'ERROR_PARAMS',
				message: '参数错误'
			})
			return
		}
		try{
			const count = await UserInfoModel.find({registe_time: eval('/^' + date + '/gi')}).count()
			res.send({
				status: 1,
				count,
			})
		}catch(err){
			console.log('获取当天注册人数失败');
			res.send({
				status: 0,
				type: 'ERROR_GET_USER_REGISTE_COUNT',
				message: '获取当天注册人数失败'
			})
		}
	}
	async adminCount(req, res, next){
		const date = req.params.date;
		if (!date) {
			console.log('参数错误')
			res.send({
				status: 0,
				type: 'ERROR_PARAMS',
				message: '参数错误'
			})
			return
		}
		try{
			const count = await AdminModel.find({create_time: eval('/^' + date + '/gi')}).count()
			res.send({
				status: 1,
				count,
			})
		}catch(err){
			console.log('获取当天注册管理员人数失败');
			res.send({
				status: 0,
				type: 'ERROR_GET_ADMIN_REGISTE_COUNT',
				message: '获取当天注册管理员人数失败'
			})
		}
	}
	async orderCount(req, res, next){
		const date = req.params.date;
		if (!date) {
			console.log('参数错误')
			res.send({
				status: 0,
				type: 'ERROR_PARAMS',
				message: '参数错误'
			})
			return
		}
		try{
			const count = await OrderModel.find({formatted_created_at: eval('/^' + date + '/gi')}).count()
			res.send({
				status: 1,
				count,
			})
		}catch(err){
			console.log('获取当天订单数量失败');
			res.send({
				status: 0,
				type: 'ERROR_GET_ORDER_COUNT',
				message: '获取当天订单数量失败'
			})
		}
	}
}

export default new Statis()
'use strict';

import BaseComponent from '../../prototype/baseComponent'
import formidable from 'formidable'
import OrderModel from '../../models/bos/order'
import CartModel from '../../models/v1/cart'
import timestamp from 'time-stamp'

class Order extends BaseComponent{
	constructor(){
		super()
		this.postOrder = this.postOrder.bind(this);
	}
	async postOrder(req, res, next){
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			if (err) {
				console.log('formidable解析出错', err);
				res.send({
					status: 1,
					message: '下单失败'
				})
				return 
			}
			const {user_id, cart_id} = req.params;
			const {address_id, come_from = 'mobile_web', deliver_time = '', description, entities, geohash, paymethod_id = 1} = fields;
			try{
				if(!(entities instanceof Array) || !entities.length){
					throw new Error('entities参数错误')
				}else if(!(entities[0] instanceof Array) || !entities[0].length){
					throw new Error('entities参数错误')
				}else if(!address_id){
					throw new Error('address_id参数错误')
				}else if(!user_id || !Number(user_id)){
					throw new Error('user_id参数错误')
				}else if(!cart_id || !Number(cart_id)){
					throw new Error('cart_id参数错误')
				}else if(!user_id){
					throw new Error('未登录')
				}
			}catch(err){
				console.log(err.message, err);
				res.send({
					status: 0,
					type: 'ERROR_PARAMS',
					message: err.message
				})
				return 
			}
			let cart;
			let order_id;
			try{
				cart = await CartModel.findOne({id: cart_id});
				order_id = await this.getId('order_id');
			}catch(err){
				console.log('获取数据失败', err);
				res.send({
					status: 0,
					type: 'ERROR_GET_DATA',
					message: '获取订单失败',
				})
				return 
			}
			const orderObj = {
				basket: {
					group: entities,
					packing_fee: {
						name: cart.cart.extra[0].name,
						price: cart.cart.extra[0].price,
						quantity: cart.cart.extra[0].quantity,
					}
				},
				restaurant_id: cart.cart.restaurant_id,
				restaurant_image_url: cart.cart.restaurant_info.image_path,
				restaurant_name:  cart.cart.restaurant_info.name,
				formatted_created_at: new Date().getTime(),
				status_bar: {
					color: 'f60',
					image_type: '',
					sub_title: '15分钟内支付',
					title: '等待支付',
				},
				total_amount: cart.cart.total,
				total_quantity: entities[0].length,
				unique_id: order_id,
				id: order_id,
				user_id,
				address_id,
			}
			try{
				await OrderModel.create(orderObj);
				res.send({
					need_validation: false,
				})
			}catch(err){
				console.log('保存订单数据失败');
				res.send({
					status: 0,
					type: 'ERROR_SAVE_ORDER',
					message: '保存订单失败'
				})
			}
		})
	}
	async getOrders(req, res, next){
		const user_id = req.params.user_id;
		const {limit = 0, offset = 0} = req.query;
		try{
			if(!user_id || !Number(user_id)){
				throw new Error('user_id参数错误')
			}else if(!Number(limit)){
				throw new Error('limit参数错误')
			}else if(typeof Number(offset) !== 'number'){
				throw new Error('offset参数错误')
			}
		}catch(err){
			console.log(err.message, err);
			res.send({
				status: 0,
				type: 'ERROR_PARAMS',
				message: err.message
			})
			return 
		}
		try{
			const orders = await OrderModel.find({user_id}, '-_id').limit(Number(limit)).skip(Number(offset));
			res.send(orders);
		}catch(err){
			console.log('获取订单列表失败', err);
			res.send({
				status: 0,
				type: 'ERROR_GET_ORDER_LIST',
				message: '获取订单列表失败'
			})
		}
	}
}

export default new Order()
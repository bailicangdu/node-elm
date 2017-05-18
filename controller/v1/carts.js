'use strict';

import AddressComponent from '../../prototype/addressComponent'
import formidable from 'formidable'
import PaymentsModel from '../../models/v1/payments'
import ShopModel from '../../models/shopping/shop'

class Carts extends AddressComponent{
	constructor(){
		super();
		this.extra = [{
			description: '',
			name: '餐盒',
			price: 2,
			quantity: 1,
			type: 0,
		}]
		this.checkout = this.checkout.bind(this);
	}
	async checkout(req, res, next){
		const UID = req.session.UID;
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			const {come_from, geohash, entities = [], restaurant_id} = fields;
			try{
				if(!(entities instanceof Array) || !entities.length){
					throw new Error('entities参数错误')
				}else if(!(entities[0] instanceof Array) || !entities[0].length){
					throw new Error('entities参数错误')
				}else if(!restaurant_id){
					throw new Error('restaurant_id参数错误')
				}
			}catch(err){
				console.log(err);
				res.send({
					status: 0,
					type: 'ERROR_PARAMS',
					message: err.message
				})
				return 
			}
			let payments; //付款方式
			let cart_id; //购物车id
			let restaurant; //餐馆详情
			let deliver_time; //配送时间
			let delivery_reach_time; //到达时间
			let from = geohash.split(',')[0] + ',' +  geohash.split(',')[1];
			try{
				payments = await PaymentsModel.find({}, '-_id');
				cart_id = await this.getId('cart_id');
				restaurant = await ShopModel.findOne({id: restaurant_id});
				const to = restaurant.latitude+ ',' + restaurant.longitude;
				deliver_time = await this.getDistance(from, to, 'tiemvalue');
				let time = new Date().getTime() + deliver_time*1000;
				let hour = ('0' + new Date(time).getHours()).substr(-2);
				let minute = ('0' + new Date(time).getMinutes()).substr(-2);
				delivery_reach_time = hour + ':' + minute;
			}catch(err){
				console.log('获取数据数据失败', err);
				res.send({
					status: 0,
					type: 'ERROR_DATA',
					message: '添加购物车失败',
				})
				return 
			}
			let deliver_amount = 0; //食品价格
			entities[0].map(item => {
				deliver_amount += item.price * item.quantity;
				if (item.specs[0]) {
					return item.name = item.name + '-' + item.specs[0];
				}
			})
			//食品总价格
			const total = deliver_amount + this.extra[0].price * this.extra[0].quantity;
			//是否支持发票
			let invoice = {
				is_available: false,
				status_text: "商家不支持开发票",
			};
			restaurant.supports.forEach(item => {
				if (item.icon_name == '票') {
					invoice = {
						is_available: true,
						status_text: "不需要开发票",
					};
				}
			})
			const checkoutInfo = {
				cart: {
					id: cart_id,
					groups: entities,
					extra: this.extra,
					deliver_amount,
					deliver_time: '',
					discount_amount: '',
					dist_info: '',
					is_address_too_far: false,
					is_deliver_by_fengniao: !!restaurant.delivery_mode,
					is_online_paid: 1,
					is_ontime_available: 0,
					must_new_user: 0,
					must_pay_online: 0,
					ontime_status: 0,
					ontime_unavailable_reason: '',
					original_total: total,
					phone: restaurant.phone,
					promise_delivery_time: 0,
					restaurant_id,
					restaurant_info: restaurant,
					restaurant_minimum_order_amount: restaurant.float_minimum_order_amount,
					restaurant_name_for_url: '',
					restaurant_status: 1,
					service_fee_explanation: 0,
					total,
					user_id: UID,
				},
				delivery_reach_time,
				invoice,
				sig: "8d65fd81cb962c1f64cd162c6ac5728f",
				current_address: {},
				payments,
				deliver_times: [],
				deliver_times_v2: [],
				merchant_coupon_info: {},
				number_of_meals: {},
				discount_rule: {},
				hongbao_info: {},
				is_support_coupon: false,
				is_support_ninja: 1,
			}
			res.send(checkoutInfo)	
		})
	}
}

export default new Carts()
'use strict'

class VipCart {
	constructor(props) {

	}
	async useCart(req, res, next){
		res.send({
			status: 0,
			type: 'INVALID_CART',
			message: '无效的卡号'
		})
	}
}


export default new VipCart()
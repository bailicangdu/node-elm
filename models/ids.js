'use strict';

import mongoose from 'mongoose'

const idsSchema = new mongoose.Schema({
	shopId: Number,
	foodId: Number,
	orderId: Number,
	userId: Number,
	addressId: Number,
	cartId: Number,
	imgId: Number,
});

const Ids = mongoose.model('Ids', idsSchema);

Ids.findOne((err, data) => {
	if (!data) {
		const newIds = new Ids({
			shopId: 0,
			foodId: 0,
			orderId: 0,
			userId: 0,
			addressId: 0,
			cartId: 0,
			imgId: 0,
		});
		newIds.save();
	}
})
export default Ids
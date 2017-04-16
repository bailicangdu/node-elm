'use strict';

import express from 'express';
import Food from '../models/food.js';
const router = express.Router();

router.get('/', async (req, res) => {
	
	let foods = await Food.findOne();
	if(!foods){
		const test = new Food({name: '测试'});
		try{
			await test.save();
			foods = await Food.findOne();
		}catch(err){
			throw new Error(err);
		}
	}
	res.send(foods.toString());
	
});

router.get('/a', (req, res, next) => {
	res.json({a: 1111})
})
export default router;

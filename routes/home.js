'use strict';

import express from 'express';
import Food from '../models/food.js';
const router = express.Router();

router.get('/', async (req, res) => {
	
	const foods = await Food.findOne();
	res.send(foods.toString());
	
});

export default router;

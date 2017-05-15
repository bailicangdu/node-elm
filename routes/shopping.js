'use strict';

import express from 'express';
import Shop from '../controller/shopping/shop'
import Food from '../controller/shopping/food'
import Category from '../controller/shopping/category'
import BaseComponent from '../prototype/baseComponent'
const baseHandle = new BaseComponent();
const router = express.Router();

router.post('/addshop', Shop.addShop);
router.post('/addimg/:type', baseHandle.uploadImg);
router.get('/restaurants', Shop.getRestaurants)
router.post('/addfood', Food.addFood);
router.get('/getcategory/:restaurant_id', Food.getCategory);
router.post('/addcategory', Food.addCategory);
router.get('/v2/restaurant/category', Category.getCategories);

export default router
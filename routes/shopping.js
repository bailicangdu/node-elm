'use strict';

import express from 'express';
import Shop from '../controller/shopping/shop'
import Food from '../controller/shopping/food'
const router = express.Router();

router.post('/addshop', Shop.addShop);
router.post('/addimg', Shop.uploadShopImg);
router.get('/addfood', Food.addFood);
router.get('/getcategory/:restaurant_id', Food.getCategory);
router.post('/addcategory', Food.addCategory);

export default router
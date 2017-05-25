'use strict';

import express from 'express';
import Shop from '../controller/shopping/shop'
import Food from '../controller/shopping/food'
import Category from '../controller/shopping/category'
import Check from '../middlewares/check'

const router = express.Router();

router.post('/addshop', Shop.addShop);
router.get('/restaurants', Shop.getRestaurants);
router.get('/restaurants/count', Shop.getShopCount);
router.post('/updateshop', Shop.updateshop);
router.delete('/restaurant/:restaurant_id', Check.checkAdmin, Shop.deleteResturant);
router.get('/restaurant/:restaurant_id', Shop.getRestaurantDetail);
router.post('/addfood', Food.addFood);
router.get('/getcategory/:restaurant_id', Food.getCategory);
router.post('/addcategory', Food.addCategory);
router.get('/v2/menu', Food.getMenu);
router.get('/v2/menu/:category_id', Food.getMenuDetail);
router.get('/v2/foods', Food.getFoods);
router.get('/v2/foods/count', Food.getFoodsCount);
router.post('/v2/updatefood', Food.updateFood);
router.delete('/v2/food/:food_id', Check.checkAdmin, Food.deleteFood);
router.get('/v2/restaurant/category', Category.getCategories);
router.get('/v1/restaurants/delivery_modes', Category.getDelivery);
router.get('/v1/restaurants/activity_attributes', Category.getActivity);

export default router
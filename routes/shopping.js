'use strict';

import express from 'express';
import Shop from '../controller/shopping/shop'
import Food from '../controller/shopping/food'
import Category from '../controller/shopping/category'
const router = express.Router();

router.post('/addshop', Shop.addShop);
router.get('/restaurants', Shop.getRestaurants);
router.get('/allrestaurants', Shop.getShopCount);
router.post('/updateshop', Shop.updateshop);
router.delete('/resturant/:restaurant_id/delete', Shop.deleteResturant);
router.get('/restaurant/:restaurant_id', Shop.getRestaurantDetail);
router.post('/addfood', Food.addFood);
router.get('/getcategory/:restaurant_id', Food.getCategory);
router.post('/addcategory', Food.addCategory);
router.get('/v2/menu', Food.getMenu);
router.get('/v2/restaurant/category', Category.getCategories);
router.get('/v1/restaurants/delivery_modes', Category.getDelivery);
router.get('/v1/restaurants/activity_attributes', Category.getActivity);

export default router
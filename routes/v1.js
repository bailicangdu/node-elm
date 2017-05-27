'use strict';

import express from 'express'
import CityHandle from '../controller/v1/cities'
import SearchPlace from '../controller/v1/search'
import Carts from '../controller/v1/carts'
import Address from '../controller/v1/address'
import Remark from '../controller/v1/remark'
import BaseComponent from '../prototype/baseComponent'
import Captchas from '../controller/v1/captchas'
import User from '../controller/v2/user'
import Order from '../controller/v1/order'
import Hongbao from '../controller/promotion/hongbao'
const baseHandle = new BaseComponent();
const router = express.Router();

router.get('/cities', CityHandle.getCity);
router.get('/cities/:id', CityHandle.getCityById);
router.get('/exactaddress', CityHandle.getExactAddress);
router.get('/pois', SearchPlace.search);
router.post('/addimg/:type', baseHandle.uploadImg);
router.post('/carts/checkout', Carts.checkout);
router.get('/carts/:cart_id/remarks', Remark.getRemarks);
router.post('/captchas', Captchas.getCaptchas);
router.get('/user', User.getInfo);
router.get('/user/:user_id', User.getInfoById);
router.get('/users/list', User.getUserList);
router.get('/users/count', User.getUserCount);
router.get('/users/:user_id/addresses', Address.getAddress);
router.post('/users/:user_id/addresses', Address.addAddress);
router.get('/user/city/count', User.getUserCity);
router.get('/addresse/:address_id', Address.getAddAddressById);
router.delete('/users/:user_id/addresses/:address_id', Address.deleteAddress);
router.post('/users/:user_id/carts/:cart_id/orders', Order.postOrder);
router.post('/users/:user_id/hongbao/exchange', Hongbao.exchange);

 
export default router
'use strict';

import express from 'express';
import Order from '../controller/v1/order'
const router = express.Router();

router.get('/v2/users/:user_id/orders', Order.getOrders)
router.get('/v1/users/:user_id/orders/:order_id/snapshot', Order.getDetail)
router.get('/orders', Order.getAllOrders)
router.get('/orders/count', Order.getOrdersCount)

export default router
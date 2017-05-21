'use strict';

import express from 'express';
import VipCart from '../controller/member/vipcart'
const router = express.Router();

router.post('/v1/users/:user_id/delivery_card/physical_card/bind', VipCart.useCart)

export default router
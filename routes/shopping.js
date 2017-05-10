'use strict';

import express from 'express';
import Shop from '../controller/shopping/shop'
const router = express.Router();

router.get('/addshop', Shop.addShop);

export default router
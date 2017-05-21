'use strict';

import express from 'express';
import Hongbao from '../controller/promotion/hongbao'
const router = express.Router();

router.get('/v2/users/:user_id/hongbaos', Hongbao.getHongbao)
router.get('/v2/users/:user_id/expired_hongbaos', Hongbao.getExpiredHongbao)

export default router
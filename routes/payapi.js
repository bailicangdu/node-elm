'use strict';

import express from 'express';
const router = express.Router();

router.get('/payment/queryOrder', (req, res, next) => {
  res.send({
    status: 0,
    type: 'PAY_FAILED',
    message: '暂不开放支付功能',
  });
})

export default router;
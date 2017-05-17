'use strict';

import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
	res.send('成功开启服务器');
});

export default router;

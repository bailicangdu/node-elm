'use strict';

import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
	res.send('node-elm 后台程序正常启动');
});

export default router;

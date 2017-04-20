'use strict';

import express from 'express';
const router = express.Router();

router.get('/cities', (req, res, next) => {
	res.send('2323132131')
});

export default router
'use strict';

import express from 'express';
import Explain from '../controller/v3/explain'
const router = express.Router();

router.get('/profile/explain', Explain.getExpalin)

export default router
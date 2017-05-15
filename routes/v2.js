'use strict';

import express from 'express';
import Entry from '../controller/v2/entry'
import CityHandle from '../controller/v1/cities';
const router = express.Router();

router.get('/index_entry', Entry.getEntry);
router.get('/pois/:geohash', CityHandle.pois);

export default router
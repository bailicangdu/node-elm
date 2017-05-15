'use strict';

import express from 'express';
import CityHandle from '../controller/v1/cities';
import SearchPlace from '../controller/v1/search'
const router = express.Router();

router.get('/cities', CityHandle.getCity);
router.get('/cities/:id', CityHandle.getCityById);
router.get('/exactaddress', CityHandle.getExactAddress);
router.get('/pois', SearchPlace.search);

export default router
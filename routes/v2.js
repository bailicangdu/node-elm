'use strict';

import express from 'express';
import Entry from '../controller/v2/entry'
import CityHandle from '../controller/v1/cities'
import User from '../controller/v2/user'
const router = express.Router();

router.get('/index_entry', Entry.getEntry);
router.get('/pois/:geohash', CityHandle.pois);
router.post('/login', User.login);
router.get('/signout', User.signout);
router.post('/changepassword', User.chanegPassword);


export default router
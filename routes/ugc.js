'use strict';

import express from 'express';
import Rating from '../controller/ugc/rating'
const router = express.Router();

router.get('/v2/restaurants/:restaurant_id/ratings', Rating.getRatings)
router.get('/v2/restaurants/:restaurant_id/ratings/scores', Rating.getScores)
router.get('/v2/restaurants/:restaurant_id/ratings/tags', Rating.getTags)

export default router
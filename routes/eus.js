'use strict';

import express from 'express';
import User from '../controller/v2/user'
const router = express.Router();

router.post('/v1/users/:user_id/avatar', User.updateAvatar)

export default router
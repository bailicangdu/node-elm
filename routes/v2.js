'use strict';

import express from 'express';
import Entry from '../controller/v2/entry'
const router = express.Router();

router.get('/index_entry', Entry.getEntry);

export default router
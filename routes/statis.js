'use strict'

import express from 'express'
import Statis from '../controller/statis/statis'

const router = express.Router()

router.get('/api/:date/count', Statis.apiCount)
router.get('/api/count', Statis.apiAllCount)
router.get('/api/all', Statis.allApiRecord)
router.get('/user/:date/count', Statis.userCount)
router.get('/order/:date/count', Statis.orderCount)
router.get('/admin/:date/count', Statis.adminCount)

export default router
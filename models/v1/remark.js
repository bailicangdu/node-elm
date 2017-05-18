'use strict';

import mongoose from 'mongoose'
import remarkData from '../../InitData/remark'
const Schema  = mongoose.Schema;

const remarkSchema = new Schema({
	remarks: [],
})

const Remark = mongoose.model('Remark', remarkSchema);

Remark.findOne((err, data) => {
	if(!data){
		Remark.create(remarkData)
	}
})

export default Remark
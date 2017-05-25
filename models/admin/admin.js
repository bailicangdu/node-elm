'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	user_name: String,
	password: String,
	id: Number,
})

adminSchema.index({id: 1});

const Admin = mongoose.model('Admin', adminSchema);


export default Admin

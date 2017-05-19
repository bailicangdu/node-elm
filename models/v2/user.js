'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
	user_id: Number,
	username: String,
	password: String,
})

const User = mongoose.model('User', userSchema);

export default User
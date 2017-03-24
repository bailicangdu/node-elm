const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const config = require('./config.js');

const _connectDB = () => new Promise(async (reslove, reject) => {
	try{
		const db = await MongoClient.connect(config.url);
		reslove(db);
	}catch(err){
		reject('连接数据库失败');
	}
});

exports.find = (collectionName, filter = {}, json = {}) => new Promise(async (reslove, reject) => {
	const db = await _connectDB();
	const {limit = 0, skip = 0, sort = {} } = json;
	const collection = db.collection(collectionName);
	const datalist = collection.find(filter).limit(limit).skip(skip).sort(sort);
	try{
		const docs = await datalist.toArray();
		reslove(docs);
	}catch(err){
		reject('查找失败');
	}
	db.close();
});

exports.insertMany = (collectionName, arr) => new Promise(async (resolve, reject) => {
	const db = await _connectDB();
	const collection = db.collection(collectionName);
	try{
		const result = collection.insertMany(arr);
		resolve(result);
	}catch(err){
		reject('添加失败');
	}
	db.close();
});

exports.deleteMany = (collectionName, filter) => new Promise(async (resolve, reject) => {
	const db = await _connectDB();
	const collection = db.collection(collectionName);
	try{
		const result = collection.deleteMany(filter);
		resolve(result)
	}catch(err){
		reject('删除失败');
	}
	db.close();
});

exports.updateMany = (collectionName, filter, newData) => new Promise(async (resolve, reject) => {
	const db = await _connectDB();
	const collection = db.collection(collectionName);
	try{
		const result = collection.updateMany(filter, newData);
		resolve(result);
	}catch(err){
		reject('修改失败');
	}
	db.close();
});

exports.getCount = (collectionName, fitlter) => new Promise(async (resolve, reject) => {
	const db = await _connectDB();
	const collection = db.collection(collectionName);
	try{
		const count = collection.find(fitlter).count();
		resolve(count);
	}catch(err){
		reject('获取数据失败');
	}
});
const express = require('express');
const db = require('./lib/db.js');
const formidable = require('formidable');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const ObjectId = require('mongodb').ObjectID;
const session = require('express-session');
const crypto = require('crypto');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('./public'));
// app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    name: 'UID',
    cookie: {maxAge: 9999999999, httpOnly: true},
    resave: false,
    saveUninitialized: true
}));

app.get('/list', async (req, res) => {
	const page = parseInt(req.query.page) || 0;
	const limit = 10;
	const skip = page*limit;
	const docs = await db.find('liuyanban', {}, {limit, skip, sort: {date: -1}});
	const count = await db.getCount('liuyanban', {});
	res.render('lyb', {
		datalist: docs,
		count: Math.ceil(count/10)
	});
});

app.post('/insert', (req, res) => {
	const form = new formidable.IncomingForm();
	form.parse(req, async (err, fields, files) => {
		try{
			await db.insertMany('liuyanban', [fields]);
			res.json({status: 200, message: '发表成功'});
		}catch(err){
			res.json(err);
		}
	})
});

app.get('/delete', async (req, res) => {
	const _id = req.query._id;
	try{
		const result = await db.deleteMany('liuyanban', {_id: ObjectId(_id)});
		res.json({message: '删除成功',result});
	}catch(err){
		res.json({message: '删除失败'});
	}
});

app.get('/login', (req, res) => {
	res.render('login');
});

app.post('/signin', (req, res) => {
	console.log(req.session.password);
	const form = new formidable.IncomingForm();
	form.parse(req, async (err, fields, files) => {
		if (!req.session.password) {
			req.session.password = fields.password;
		}
	});
});

app.listen(3000);
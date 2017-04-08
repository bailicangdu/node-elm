const express = require('express');
const app = express();
const db = require('./mongodb/db.js');
const Food = require('./models/food.js');
const config = require('config-lite');

app.use(express.static('./public'))

app.get('/', async (req, res) => {
	// const a = new Food({name: 'aaaa'});
	// a.save((err) => {
	// 	if (err) {
	// 		console.log('sdfsf')
	// 	}
	// 	res.send('数据保存成功')
	// })
	const foods = await Food.findOne();
	res.send(foods.toString());
	// Food.findOne().then(foods => {
	// 	res.send(foods.toString());
	// })
})
app.get('/abc', (req, res) => {
	res.json({a: 1})
})


app.listen(config.port)
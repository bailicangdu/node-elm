import fetch from 'node-fetch';
import Ids from '../models/ids'
import formidable from 'formidable'
import path from 'path'
import fs from 'fs'
// import gm from 'gm'
import qiniu from 'qiniu'
qiniu.conf.ACCESS_KEY = 'Ep714TDrVhrhZzV2VJJxDYgGHBAX-KmU1xV1SQdS';
qiniu.conf.SECRET_KEY = 'XNIW2dNffPBdaAhvm9dadBlJ-H6yyCTIJLxNM_N6';


export default class BaseComponent {
	constructor(){
		this.idList = ['restaurant_id', 'food_id', 'order_id', 'user_id', 'address_id', 'cart_id', 'img_id', 'category_id', 'item_id', 'sku_id'];
		this.imgTypeList = ['shop', 'food', 'avatar','default'];
		this.uploadImg = this.uploadImg.bind(this)

	}
	async fetch(url = '', data = {}, type = 'GET', resType = 'JSON'){
		type = type.toUpperCase();
		resType = resType.toUpperCase();
		if (type == 'GET') {
			let dataStr = ''; //数据拼接字符串
			Object.keys(data).forEach(key => {
				dataStr += key + '=' + data[key] + '&';
			})

			if (dataStr !== '') {
				dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
				url = url + '?' + dataStr;
			}
		}

		let requestConfig = {
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}

		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
		}
		let responseJson;
		try {
			const response = await fetch(url, requestConfig);
			if (resType === 'TEXT') {
				responseJson = await response.text();
			}else{
				responseJson = await response.json();
			}
		} catch (error) {
			console.log('获取http数据失败');
			throw new Error(error)
		}
		return responseJson
	}
	//获取id列表
	async getId(type){
		if (!this.idList.includes(type)) {
			console.log('id类型错误');
			throw new Error('id类型错误');
			return
		}
		try{
			const idData = await Ids.findOne();
			idData[type] ++ ;
			await idData.save();
			return idData[type]
		}catch(err){
			console.log('获取ID数据失败');
			throw new Error(err)
		}
	}

	async uploadImg(req, res, next){
		const type = req.params.type;
		if (!this.imgTypeList.includes(type)) {
			console.log('前台传入参数错误');
			res.send({
				status: 0,
				type: 'ERROR_PARAMS',
				message: '参数错误',
			})
			return
		}
		const form = formidable.IncomingForm();
		form.uploadDir = './public/img/' + type;
		
		form.parse(req, async (err, fields, files) => {
			let img_id;
			try{
				img_id = await this.getId('img_id');
			}catch(err){
				console.log('获取图片id失败');
				fs.unlink(files.file.path)
				res.send({
					status: 0,
					type: 'ERROR_GET_ID',
					message: '获取图片id失败',
				})
				return 
			}
			const imgName = (new Date().getTime() + Math.ceil(Math.random()*10000)).toString(16) + img_id;
			const extname = path.extname(files.file.name);
			const repath = './public/img/' + type + '/' + imgName + extname;
			try{
				const key = imgName + extname;
				await fs.rename(files.file.path, repath);
				const token = this.uptoken('node-elm', key);
				const qiniuImg = await this.uploadFile(token.toString(), key, repath);
				fs.unlink(repath);
				res.send({
					status: 1,
					image_path: qiniuImg
				})
				// gm(repath)
				// .resize(400, 400, '!')
				// .write(repath, async (err) => {
				// 	if(err){
				// 		console.log('改写图片尺寸失败');
				// 		fs.unlink(repath);
				// 		res.send({
				// 			status: 0,
				// 			type: 'ERROR_GET_SIZE',
				// 			message: '改写图片尺寸失败',
				// 		})
				// 	}else{
				// 		const path = repath.replace(/^\.\/public/, '');
				// 		res.send({
				// 			status: 1,
				// 			image_path: path
				// 		})
				// 	} 
				// })
			}catch(err){
				console.log('改写图片路径失败', err);
				fs.unlink(files.file.path)
				res.send({
					status: 0,
					type: 'ERROR_USE_GM',
					message: '切图失败',
				})
			}
		});
	}
	uptoken(bucket, key){
		var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
  		return putPolicy.token();
	}
	uploadFile(uptoken, key, localFile){
		return new Promise((resolve, reject) => {
			var extra = new qiniu.io.PutExtra();
		    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
			    if(!err) {  
			    	resolve(ret.key)
			    } else {
			    	console.log('图片上传至七牛失败', err);
			    	reject(err)
			    }
		  	});

		})
	}	
}
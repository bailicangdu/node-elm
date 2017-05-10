import fetch from 'node-fetch';
import Ids from '../models/ids'
import formidable from 'formidable'
import path from 'path'
import fs from 'fs'
import gm from 'gm'

export default class BaseComponent {
	constructor(){

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
			console.error(error)
			throw new Error(error)
		}
		return responseJson
	}
	//获取id列表
	async getId(type){
		const typeList = ['orderId', 'userId', 'addressId', 'cartId', 'imgId'];
		if (!typeList.includes(type)) {
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
			throw new Error(err)
		}
	}

	async uploadImg(req, type = 'default'){
		return new Promise((resolve, reject) => {
			const form = formidable.IncomingForm();
			form.uploadDir = './public/img/' + type;
			form.parse(req, async (err, fields, files) => {
				let imgId;
				try{
					imgId = await this.getId('imgId');
				}catch(err){
					console.log('获取图片id失败');
					fs.unlink(files.file.path)
					reject(err);
				}
				const imgUrl = new Date().getTime().toString() + imgId;
				const extname = path.extname(files.file.name);
				const repath = './public/img/' + type + '/' + imgUrl + extname;
				try{
					await fs.rename(files.file.path, repath);
					gm(repath)
					.resize(400, 400, '!')
					.write(repath, async (err) => {
						if(err){
							console.log('改写图片尺寸失败');
							fs.unlink(repath);
							reject(err);
						}else{
							resolve(repath.replace(/^\.\/public/, ''));
						} 
					})
				}catch(err){
					console.log('改写图片路径失败');
					fs.unlink(files.file.path)
					reject(err);
				}
			});
		})
	}	
}
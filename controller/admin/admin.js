'use strict';

import AdminModel from '../../models/admin/admin'
import BaseComponent from '../../prototype/baseComponent'
import crypto from 'crypto'
import formidable from 'formidable'

class Admin extends BaseComponent {
	constructor(){
		super()
		this.login = this.login.bind(this)
		this.register = this.register.bind(this)
		this.encryption = this.encryption.bind(this);
	}
	async login(req, res, next){
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			if (err) {
				res.send({
					status: 0,
					type: 'FORM_DATA_ERROR',
					message: '表单信息错误'
				})
				return
			}
			const {user_name, password} = fields;
			try{
				if (!user_name) {
					throw new Error('用户名错误')
				}else if(!password){
					throw new Error('密码错误')
				}
			}catch(err){
				console.log(err.message, err);
				res.send({
					status: 0,
					type: 'GET_ERROR_PARAM',
					message: err.message,
				})
				return
			}
			const newpassword = this.encryption(password);
			try{
				const admin = await AdminModel.findOne({user_name})
				if (!admin) {
					console.log('该用户不存在');
					req.session.admin_id = 100000;
					res.send({
						status: 0,
						type: 'USER_DID_NOT_EXIST',
						message: '该用户不存在',
					})
				}else if(newpassword.toString() != admin.password.toString()){
					console.log('密码错误');
					req.session.admin_id = 100000;
					res.send({
						status: 0,
						type: 'ERROR_PASSWORD',
						message: '密码错误',
					})
				}else{
					req.session.admin_id = admin.id;
					res.send({
						status: 1,
						success: '登录成功'
					})
				}
			}catch(err){
				console.log('登录超级管理员失败', err);
				res.send({
					status: 0,
					type: 'LOGIN_ADMIN_FAILED',
					message: '登录超级管理员失败',
				})
			}
		})
	}
	async register(req, res, next){
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			if (err) {
				res.send({
					status: 0,
					type: 'FORM_DATA_ERROR',
					message: '表单信息错误'
				})
				return
			}
			const {user_name, password} = fields;
			try{
				if (!user_name) {
					throw new Error('用户名错误')
				}else if(!password){
					throw new Error('密码错误')
				}
			}catch(err){
				console.log(err.message, err);
				res.send({
					status: 0,
					type: 'GET_ERROR_PARAM',
					message: err.message,
				})
				return
			}
			try{
				const admin = await AdminModel.findOne({user_name})
				if (admin) {
					console.log('该用户已经存在');
					res.send({
						status: 0,
						type: 'USER_HAS_EXIST',
						message: '该用户已经存在',
					})
				}else{
					const admin_id = await this.getId('admin_id');
					const newpassword = this.encryption(password);
					const newAdmin = {user_name, password: newpassword, id: admin_id}
					await AdminModel.create(newAdmin)
					req.session.admin_id = admin_id;
					res.send({
						status: 1,
						message: '注册超级管理员成功',
					})
				}
			}catch(err){
				console.log('注册超级管理员失败', err);
				res.send({
					status: 0,
					type: 'REGISTER_ADMIN_FAILED',
					message: '注册超级管理员失败',
				})
			}
		})
	}
	encryption(password){
		const newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
		return newpassword
	}
	Md5(password){
		const md5 = crypto.createHash('md5');
		return md5.update(password).digest('base64');
	}
	async singout(req, res, next){
		try{
			delete req.session.admin_id;
			res.send({
				status: 1,
				success: '退出成功'
			})
		}catch(err){
			console.log('退出失败', err)
			res.send({
				status: 0,
				message: '退出失败'
			})
		}
	}
}

export default new Admin()
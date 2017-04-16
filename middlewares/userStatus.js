'use strict';

class UserStatus {
	constructor(){
		
	}
	login(req, res, next){
		/*
		已登陆则返回
		 */
		if (req.session.user) {
			req.flash('error', '已登录');
			res.redirect('back'); 
		}else{
			req.flash('error', '未登录');
			res.redirect('/signin');
		}
		next();
	}
}

export default new UserStatus();
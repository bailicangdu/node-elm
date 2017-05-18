'use strict';

import BaseComponent from '../../prototype/baseComponent'

class Address extends BaseComponent{
	constructor(){
		super()

	}
	async getAddress(req, res, next){
		res.send([])
	}
}

export default new Address()
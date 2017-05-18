'use strict';

import BaseComponent from '../../prototype/addressComponent'
import formidable from 'formidable'

class Carts extends BaseComponent{
	constructor(){
		super()
	}
	async checkout(req, res, next){
		const form = new formidable.IncomingForm();
		res.send('dsdfsfs')
		form.parse(req, async (err, fields, files) => {

		})
	}
}

export default new Carts()
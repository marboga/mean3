console.log('users controller loaded')

var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {
	login: function(req, res){
		console.log('inside login function, name=', req.body.name)
		User.findOne({name: req.body.name}, function(err, user){
			if(err){
				console.log(err)
				res.json(err)
			}else{
				console.log('no error in search')
				if (user){
					res.json(user)
				}else{
					var user = new User({name: req.body.name})
					user.save(function(err, user){
						if (err){
							res.json(err)
						}else{
							res.json(user)
						}
					})
				}
			}
		})
	},






}

console.log('appointments controller loaded');

var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');
var User = mongoose.model('User');

module.exports = {
	index: function(req, res){
		console.log('appts index');
		Appointment.find({}).populate('_patient').exec(function(err, data){
			if (err){
				console.log(err)
				res.json(err)
			}else{
				res.json(data)
			}
		})
	},
	create: function(req, res){
		console.log('appts create', req.body);
		var appointment = new Appointment(req.body);
		appointment.save(function(err, new_appt){
			if (err){
				console.log(err)
				res.json(err)
			}else{
				User.findOne({_id: req.body._patient}, function(err, sick_user){
					if (err){
						console.log(err)
						res.json(err)
					}else{
						sick_user._appointments.push(new_appt._id)
						sick_user.save()
						res.json(new_appt)
					}
				})
			}
		})
	},




}

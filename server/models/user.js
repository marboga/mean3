console.log('user model loaded');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true},
	_appointments: [{type: Schema.Types.ObjectId, ref: "Appointment"}],
}, {timestamps: true})

mongoose.model('User', UserSchema)

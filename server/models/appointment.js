console.log('appointment model loaded');

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AppointmentSchema = new mongoose.Schema({
	_patient: {type: Schema.Types.ObjectId, ref: 'User'},
	date: {type: Date, required: true},
	time: {type: Date, required: true},
	issue: {type: String, required: true}
}, {timestamps: true})

mongoose.model('Appointment', AppointmentSchema)

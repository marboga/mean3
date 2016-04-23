console.log('in config/routes.js')

var users = require('../controllers/users.js');
var appointments = require('../controllers/appointments.js');

module.exports = function(app){
	app.get('/users', function(req, res){
		console.log('getting all users, in server/routes')
		users.index(req, res)
	})
	app.get('/users/:id', function(req, res){
		console.log('getting one user, in server/routes')
		users.show(req, res)
	})
	app.post('/login', function(req, res){
		console.log('adding new user, req.body=', req.body)
		users.login(req, res);
	})
	app.get('/appointments', function(req, res){
		console.log('retrieving appts')
		appointments.index(req, res);
	})
	app.post('/appointments/new', function(req, res){
		console.log('new appt coming in server', req.body)
		appointments.create(req, res);
	})
	app.post('/appointments/:id/delete', function(req, res){
		console.log('deleting appt', req.body)
		appointments.delete(req, res);
	})

}
//RESTFUL syntax
//get all = index (/users) (get)
//get one = show (/users/:id)
//create = create (/users) (post)
//put/patch = update (/users/:id)
//delete = delete (/users/:id)

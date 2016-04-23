MyApp.config(function($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: './../views/home.html',
		controller: 'usersController'
	})
	.when('/new_appointment', {
		templateUrl: './../views/new_appt.html',
		controller: 'appointmentsController'
	})
	.otherwise('/')
})

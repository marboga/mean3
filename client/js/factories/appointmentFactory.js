console.log('appointmentFactory loaded');

MyApp.factory('appointmentFactory', function($http){
	var factory = {};

	factory.index = function(callback){
		$http.get('/appointments').success(function(appointments){
			console.log('appts returned! =>', appointments)
			callback(appointments)
		})
	}

	factory.create = function(info, callback){
		console.log('new appt coming throug', info);
		$http.post('/appointments/new', info).success(function(info){
			callback(info);
		})
	}


	return factory;
})

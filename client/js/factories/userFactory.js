console.log('userFactory loaded');

MyApp.factory('userFactory', function($http){
	var factory = {}
	factory.user;

	factory.index = function(callback){
		// console.log('in user index, factory.user=', factory.user)
		callback(factory.user);
	}

	factory.login = function(user, callback){
			var SendMe = {name: user}
			// console.log('factory data to pass:', SendMe)
			$http.post('/login', SendMe).success(function(output){
				factory.user = output;
				// console.log("factory user login function", factory.user);
				callback(factory.user);
			})
		}

		factory.logout = function(){
			console.log('running logout function')
			factory.user = undefined;
			
		}



	return factory;
})

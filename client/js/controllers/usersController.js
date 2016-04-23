console.log('usersController loaded');

MyApp.controller('usersController', function($scope, $location, userFactory, appointmentFactory){
	$scope.user = userFactory.user;
	$scope.appointments = {};
	console.log('curruser==', $scope.user)


	$scope.login = function(name){
		// console.log('in login function, name =', name)
		userFactory.login(name, function(data){
			$scope.user = {name: data};
			$location.url('/');
		})
	}

	$scope.logout = function(){
		console.log('LOGGING OUT')
		userFactory.logout(function(data){
		})
			$scope.user = undefined
			var name = undefined
			$location.url('/')
			getUser()
	}

	function getUser(){
		console.log('getting user')
		userFactory.index(function(data){
			if (data !== undefined){
				$scope.user = data
				// console.log('scope user set to ', $scope.user )
			}
			if ($scope.user === undefined){
				var name = window.prompt('What is your name?')
				// console.log('inputted name',name)
				$scope.login(name)
			}
		})
	}
	getUser()

	function getAppointments(){
		appointmentFactory.index(function(data){
			$scope.appointments = data;
		})
	}
	getAppointments();


})

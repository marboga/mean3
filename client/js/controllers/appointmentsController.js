console.log('appointmentsController loaded');

MyApp.controller('appointmentsController', function($scope, appointmentFactory, userFactory, $location, moment){
	$scope.user = userFactory.user;
	$scope.currentDate = new Date();
	$scope.errors = []

	function getUser(){
		console.log('getting user')
		userFactory.index(function(data){
			if (data !== undefined){
				$scope.user = data
				// console.log('scope user set to ', $scope.user )
			}
			if ($scope.user === undefined){
				var name = window.prompt('What is your name?')
				console.log('inputted name',name)
				$scope.login(name)
			}
		})
	}
	getUser()

	$scope.newAppointment = function(data){
		console.log("making appointment,data = ", data)
		var currID = $scope.user._id
		console.log("currID ===",currID)
		$scope.new_appt._patient = currID

		if($scope.new_appt.date && $scope.new_appt.time){
			console.log('in IF STAtEMENT')
			var dt =moment($scope.new_appt.date)
			var tm = moment($scope.new_appt.time)
			console.log(dt, tm);
		}
		else{
		$scope.errors.push('Date and time are required.')
		}

		appointmentFactory.create($scope.new_appt, function($scope, appointmentFactory){
			console.log('came back from factory')
			$scope.new_appt = {};
			$location.url('/')
		})
	}



})

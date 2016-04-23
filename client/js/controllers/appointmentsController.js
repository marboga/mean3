console.log('appointmentsController loaded');

MyApp.controller('appointmentsController', function($scope, appointmentFactory, userFactory, $location, moment){
	$scope.user = userFactory.user;
	$scope.currentDate = new Date();
	$scope.errors = ""
	$scope.appointments = {}
	var error = false;

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

	function getAppointments(){
		appointmentFactory.index(function(data){
			$scope.appointments = data;
		})
	}
	getAppointments();

	$scope.newAppointment = function(data){
		if (data === undefined){
			$scope.errors += "All forms must be filled out completely."
		}
		if (data.issue.length < 10){
			$location.url('/new_question')
			var thiserr = "Your answer must be at least 10 characters long."
			$scope.errors += thiserr
			return false;
		}
		console.log("making appointment,data = ", data)
		var currID = $scope.user._id
		console.log("currID ===",currID)
		$scope.new_appt._patient = currID


		if($scope.new_appt.date && $scope.new_appt.time){
			console.log('in IF STAtEMENT')
			var dt =moment($scope.new_appt.date)
			var tm = moment($scope.new_appt.time).format("HH:mm")
			if (dt.isAfter() === false ){
				error = true
				var thiserr = 'Date must be in the future.'
				$scope.errors += thiserr
			}
			console.log(error, "ERRORRRRRR")
			console.log('DT: ', dt, "TM", tm, "mOMEMTN", moment())
			// if(tm.isBetween('09:00', '17:00') === false){
			// 	$scope.errors += 'Time must be between 9 am and 5 pm.'
			// 	error = true
			// }
			if (error === false){
				console.log('error was false, creating')
				appointmentFactory.create($scope.new_appt, function($scope, appointmentFactory){
					console.log('came back from factory')
					$scope.new_appt = {};
					$location.url('/')
				})
			}
		}
		else {
		$scope.errors += 'Date and time are required. \n Time must be between 9am and 5pm. \n Date must be in the future.'
		error = false;
		}
	}



})

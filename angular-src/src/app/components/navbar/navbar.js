//module
angular.module('OCDV',[
	])
	//define controller
	.controller('MainController', function($scope){

		//Escape button

		(function exit(){
        if (document.getElementById('button').clicked == true){

            window.open("http://weather.com", "_blank");

            window.location.replace(url);
        }

        $scope.exit= exit;
    });




//-------------
//	no work
//--------------
		// function getAway() {
	 //    	// opens new tab
	 //    	window.open("http://weather.com", "_blank");
	 //    	// Replaces current site with another site
	 //    	window.location.replace("google.com");
	 //   		$("body").html('');
		// }

	 //   		//make function available to view
	 //   		$scope.getAway = getAway;



	});
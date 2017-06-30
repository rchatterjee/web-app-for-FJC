//module
angular.module('OCDV',[])
	//define controller
	.controller('MainController', function($scope){


		$scope.options = [
			{ "id" :0, "name" :"Home" },
			{ "id" :1, "name" :"Service Offered" },
			{ "id" :2, "name" :"FJC Virtual Tour" },
			{ "id" :3, "name" :"Tech Safety Tips" },
			{ "id" :4, "name" :"Testimonial" },
			{ "id" :5, "name" :"Prepare for your visit" },
			{ "id" :6, "name" :"FAQ" },
			{ "id" :7, "name" :"Login" },
			{ "id" :8, "name" :"Register" },
			{ "id" :9, "name" :"Escape" }

		];


//--------------------------------------
//	Escape button
//--------------------------------------
		function exit(url){

            window.open("http://weather.com", "_blank");

            window.location.replace(url);
        }
        //Makes the method public to the view
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
app.controller("homeController",function($scope, $location, loginService){
	$scope.authenticateUser = function(){

			//should hit the authentication server for validating credentials
			var key = loginService.authenticate(this.user);
			if(key){
				//authenticated
				$location.path(key);
			}else{
				alert("credentials wrong");
			}

	}
});
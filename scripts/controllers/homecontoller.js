app.controller("loginCtrl",function(loginService, $location{
	$scope.authenticateUser = function(){

			//should hit the authentication server for validating credentials
			if(loginService.authenticate(user)){
				//authenticated
				$location.path();
			}else{
				alert("credentials wrong");
			}

	}
});
app.controller("stdentViewController",function($scope,studentService){
	$scope.tests=[];
	$scope.tests=studentService.getTests();
});
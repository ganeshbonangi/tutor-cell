app.controller("examSettingController",function($scope,MockTestService){
	$scope.sections=[1,2,3];
	$scope.mockTests = MockTestService.getMocktests();
	$scope.deleteMockTest = function(index){
		$scope.mockTests = MockTestService.deleteMocktest(index);
	}
	$scope.editMockTest = function(index){
		$scope.mockTests = MockTestService.editMocktest(index);
	}
});

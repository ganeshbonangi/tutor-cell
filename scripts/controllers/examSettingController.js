app.controller("examSettingController",function($scope,MockTestService,$modal){
	$scope.sections=[0];
	$scope.sectionNames=[];
	$scope.currentMocktest={};
	//$scope.showSettingsForm=false;
	$scope.addMocktest = function(){
		$scope.currentMocktest={};
    //console.log($scope.currentMocktest);
    $scope.open('lg');
	}
	$scope.editMocktest = function(index){
		$scope.currentMocktest = $scope.mockTests[index];
   // console.log($scope.currentMocktest);
    $scope.open('lg');
	}
	$scope.deleteMocktest = function(index){
		$scope.mockTests.splice(index,1);
	}
	$scope.mockTests = MockTestService.getMocktests();
  $scope.studentsListView = function(index){
    //have to write filter for getting the studnets in the mocktest id
    $scope.currentMocktest=$scope.mockTests[index];
    $scope.students = $scope.currentMocktest.students;

    $scope.openStudentModel('lg');
  }

  $scope.openStudentModel = function(size){

    var modalInstance = $modal.open({
      templateUrl: 'studentList.html',
      controller: studentListCtrl,
      size: size,
      resolve: {
        currentMocktest: function () {
          return $scope.currentMocktest;//$scope.items;
        },
        students: function () {
          return $scope.students;//$scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      //$scope.selected = selectedItem;
    }, function () {
      //$log.info('Modal dismissed at: ' + new Date());
    });

  }
  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      size: size,
      resolve: {
        currentMocktest: function () {
          return $scope.currentMocktest;//$scope.items;
        },
        mockTests: function () {
          return $scope.mockTests;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      //$scope.selected = selectedItem;
    }, function () {
      //$log.info('Modal dismissed at: ' + new Date());
    });
  };



});

var studentListCtrl = function ($scope, $modalInstance, students, currentMocktest,MockTestService){

    $scope.currentMocktest = currentMocktest;
    $scope.students = students;
    $scope.addStudent = function(obj){
      $scope.students.push(obj);
    };
    $scope.deleteStudent = function(index){
      $scope.students.splice(index, 1);
    }
    $scope.cancel = function () {
      MockTestService.saveStudents(currentMocktest);
      $scope.currentMocktest={};
      $modalInstance.dismiss('cancel');
    };

}

var ModalInstanceCtrl = function ($scope, $modalInstance, currentMocktest, MockTestService, mockTests) {

  $scope.currentMocktest = currentMocktest;
  $scope.mockTests=mockTests;
  if(!$scope.currentMocktest.startDate){
    $scope.currentMocktest.startDate = new Date('2013-03-01T01:10:00');
    //console.log($scope.currentMocktest.startDate);
  }else{
    $scope.currentMocktest.startDate = new Date();
  }
  //$scope.currentMocktest.value=new Date('2013-03-01T01:10:00');
  $scope.selected = {
    item:0//$scope.items[0]
  };

  $scope.save = function () {
    MockTestService.editOrAddMocktest($scope.currentMocktest);
    if($scope.mockTests){
      $scope.mockTests.push($scope.currentMocktest);
    }else{
      $scope.mockTests=[];
      $scope.mockTests.push($scope.currentMocktest);
    }
    $scope.currentMocktest={};
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.addSection = function(){
    if($scope.currentMocktest.sections){
      $scope.currentMocktest.sections.push($scope.currentMocktest.sections.length);
    }else{
      $scope.currentMocktest.sections=[];
      $scope.currentMocktest.sections.push($scope.currentMocktest.sections.length);
    }
    
  };

  $scope.deleteSection = function(){
    try{
      $scope.currentMocktest.sections.pop();
    }catch(e){  }
  };

};

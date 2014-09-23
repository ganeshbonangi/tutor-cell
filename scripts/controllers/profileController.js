app.controller("profileCtrl",function(profileService){

  $scope.profile=profileService.getProfile("some user name");
  $scope.editname=true;
  $scope.editpassword=true;
  $scope.editmail_id=true;
  $scope.editphone=true;

});
var app=angular.module("tutorCell",["ngRoute","ui.bootstrap"]);
var service=angular.module("services",[]);
app.config(function($routeProvider){
	$routeProvider.when("/examSetting",{
									templateUrl:"view/examSetting.html"
								})
				   .when("/home",{
									templateUrl:"view/home.html"
								})
				  .when("/userSetting",{
				  					templateUrl:"view/userSetting.html"
				  				})
				  .when("/questionSetting",{
				  					templateUrl:"view/questionSetting.html"
				  				})
				  .otherwise({redirectTo:"/home"});
});

app.run(function(){

});

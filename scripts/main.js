var app=angular.module("tutorCell",["ngRoute","ui.bootstrap"]);
var service=angular.module("services",[]);
app.config(function($routeProvider){
	$routeProvider.when("/exam",{
									templateUrl:"view/exam.html"
								})
				  .when("/ansers",{
				  					templateUrl:"view/ansers.html"
				  				})
				  .when("/home",{
				  					templateUrl:"view/home.html"
				  				}).otherwise({redirectTo:"/home"});
});

app.run(function(){

});

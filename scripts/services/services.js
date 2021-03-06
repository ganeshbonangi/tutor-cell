app.service("TutorService",function($rootScope,$sce){

		this.addTutor = function(){
			
		},
		this.editTutor = function(){
			
		}

}).service("MockTestService",function($rootScope){

			this.editOrAddMocktest = function(obj){
				    if(obj.id){
				      //hit insert service
				    }else{
				      //hit update service
				    }
				    //have to hit the service for
				    //onsuccess{
				    //in success have to receice the id for the current object and should ad to the current obj
				    
			},this.getMocktests = function(){
				return [
					{
						name:"mocktest1",
						sections:["section1","section2","section3","section4","section5"],
						startDate:"2013-03-01T01:10:00",
						endDate:"22-06-2014",
						durationHH:02,
						durationMM:22,
						students:["student1","student2","student3"],
						id:1
					},{
						name:"mocktest2",
						sections:["section1","section2","section3","section4","section5"],
						startDate:"22-05-2014",
						endDate:"22-06-2014",
						duration:"2:20",
						students:["student1","student2","student3"],
						id:2
					},{
						name:"mocktest3",
						sections:["section1","section2","section3","section4","section5"],
						startDate:"22-05-2014",
						endDate:"22-06-2014",
						duration:"3:30",
						students:["student1","student2","student3"],
						id:3
					}
				];
			},this.deleteMocktest = function(){

			},this.addSections = function(){

			},this.saveStudents = function(obj){
				//update the existing student list in the given mocktest
			}

}).service("QuestionService",function($rootScope){

			this.addQuestion = function(){

			},
			this.deleteQuestion = function(){

			},
			this.editQuestion = function(){
				
			}
}).service("ClassService",function(){

			this.addClass = function(){

			},
			this.editClass = function(){

			},
			this.deleteClass = function(){

			}
}).service("ThemeService",function(){
			this.addTheme = function(){

			},
			this.editTheme = function(){

			},
			this.deleteTheme = function(){

			}
}).service("UserService", function(){

			this.addUser = function(){

			},
			this.editUser = function(){

			},
			this.deleteUser = function(){
				
			}
}).service("profileService",function(){

	this.getProfile = function(username){
		return {
                  "name":"ganesh",
                  "password":"password",
                  "mail_id":"ganesh.bonangi@gmail.com",
                  "phone":949979407
  				};
	}
}).service("loginService", function(){

	this.authenticate = function(user){
		return "studentview";//"examSetting";//should hit the service with user credentials

		//examsetting view will be the teacher view
	}

}).service("studentService",function(){
	this.getTests = function(){
		return [
				{
					"name":"test1",
					"score":"not attempted",
					"rank":"not "
				},
				{
					"name":"test2",
					"score":"40",
					"rank":"3 out of 20"
				},{
					"name":"test3",
					"score":"30",
					"rank":"2 out of 30"
				}
		];
	}
});

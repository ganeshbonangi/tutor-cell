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
						id:1
					},{
						name:"mocktest2",
						sections:["section1","section2","section3","section4","section5"],
						startDate:"22-05-2014",
						endDate:"22-06-2014",
						duration:"2:20",
						id:2
					},{
						name:"mocktest3",
						sections:["section1","section2","section3","section4","section5"],
						startDate:"22-05-2014",
						endDate:"22-06-2014",
						duration:"3:30",
						id:3
					}
				];
			},this.deleteMocktest = function(){

			},this.addSections = function(){

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
});

app.service("TutorService",function($rootScope,$sce){

		this.addTutor = function(){

			
		},
		this.editTutor = function(){
			
		}

}).service("MockTestService",function($rootScope){

			this.addMocktest = function(){

			},
			this.deleteMocktest = function(index){
				
			},
			this.addSections = function(){

			},
			this.editMocktest = function(index){
				//update the json object 
			},
			this.getMocktests = function(){
				return [{
							id:1,
							name:"sampletest",
							sections:["section1","section2","section3","section4"],
							className:"fifth",
							startDate:"12/08/2014",
							endDate:"15/09/2014",
							time:"01:10",
							tutorId:1,
							theme:"default"
						},{
							id:2,
							name:"sampletest2",
							sections:["section21","section22","section23","section24"],
							className:"sisth",
							startDate:"12/08/2014",
							endDate:"15/09/2014",
							time:"02:20",
							tutorId:1,
							theme:"default"
						}];
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

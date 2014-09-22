app.service("TutorService",function($rootScope,$sce){

		this.addTutor = function(){
			
		},
		this.editTutor = function(){
			
		}

}).service("MockTestService",function($rootScope){

<<<<<<< HEAD
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

=======
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
>>>>>>> bb7a58703dcabaed64e0aab8e2615f970c1224ff
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

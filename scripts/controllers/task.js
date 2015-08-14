'use strict';

app.controller('TaskController', function($scope, FURL, $firebase, $location, $routeParams, toaster){  	//NEW CONTROLLER FOR OUR MAIN APP MODULE
	
	var ref = new Firebase(FURL);
	var fbTasks = $firebase(ref.child('tasks')).$asArray();
	var taskId = $routeParams.taskId;

	if(taskId){						//IF THERE IS A TASK ID THEN THE TASK IS BEING EDITED
		$scope.selectedTask = getTask(taskId);
	}

	function getTask(taskId){
		return $firebase(ref.child('tasks').child(taskId)).$asObject();			//RETURN THE SELECTED TASK BASED ON ITS FIREBASE ID
	}

	$scope.updateTask = function(task){			//CHANGES THE VALUES OF THE PARAMETERS IN THE SELECTED TASK
		$scope.selectedTask.$save(task);
		toaster.pop('success', "Post updated!");
		$location.path('/browse');
	};

	$scope.tasks = fbTasks;

	$scope.postTask = function(task){					//TAKES IN AND LOGS THIS TASK OBJECT ON FORM SUBMISSION
		fbTasks.$add(task);
		toaster.pop('success', "Post created!");
		$location.path('/browse');
	};
});
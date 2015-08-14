'use strict';

app.controller('NavController', function($scope, $location, toaster, Auth) {

	$scope.currentUser = Auth.user;
	$scope.signedIn = Auth.signedIn;

  $scope.logout = function() {    
    Auth.logout();
    $location.path('/');    
    toaster.pop('success', "Logged out successfully");
    
  };
	
});
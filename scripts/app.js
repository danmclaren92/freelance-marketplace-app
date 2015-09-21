'use strict';       //USE STRICT SAYS RUN THE CODE IN 'STRICT' TYPE (HAS CERTAIN RULES-LIKE UNDECLARED VARIABLES WILL THROW AN ERROR)

var app = angular
  .module('TaskApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase',
    'toaster'
  ])
  .constant('FURL', 'https://itaskr.firebaseio.com/')  
  .config(function ($routeProvider) {        //CHANGE CONTENT BASED ON URL SUFFIX
    $routeProvider      
      .when('/', {                            //WHEN URL IS LIKE THAT
        templateUrl: 'views/browse.html',
        controller: 'TaskController'          //DISPLAY CONTENT-THE BEAUTY OF MVC'S!    
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'TaskController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .otherwise({
        redirectTo: 'views/browse.html'            //WHAT TO DO IF THE URL SUFFIX DOESN'T MATCH ANY CASE
      });
  });

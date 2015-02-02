'use strict';

var MyApp = angular.module('MyWebsite', [
  'ngRoute',
  'ngResource'
]);

MyApp.config(['$routeProvider',
    function($routeProvider){
      $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCntrl'
      }).
      when('/photos', {
        templateUrl: 'partials/photos.html',
        controller: 'PhotosCntrl'
      }).
      when('/referee', {
        templateUrl: 'partials/referee.html',
        controller: 'RefereeCntrl'
      }).
      when('/volunteer', {
        templateUrl: 'partials/volunteer.html',
        controller: 'VolunteerCntrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
}]);

MyApp.factory("myService", function($route, $routeParams, $location){
  return {
    sharedObject: {
      homeList : [{
        'name': 'Home'
      },{
        'name': 'Photos'
      },{
        'name': 'Referee'
      },{
        'name': 'Volunteer'
      }],
      navSelect : function(id, flag){
        switch (id) {
          case 0: //home
            $location.path("/home");
            break;
          case 1: //photos
            $location.path("/photos");
            break;
          case 2: //referee
            $location.path("/referee");
            break;
          case 3: //volunteer
            $location.path("/volunteer");
            break;
        }
      },
    }
  };
})
'use strict';

MyApp.controller('RefereeCntrl',function($scope, $route, $routeParams, $location, myService){
    $scope.homeList = myService.sharedObject.homeList;
    $scope.listClick = myService.sharedObject.navSelect;    
    
});
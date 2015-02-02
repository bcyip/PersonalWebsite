'use strict';

MyApp.controller('HomeCntrl',function($scope, $route, $routeParams, $location, myService){
    $scope.homeList = myService.sharedObject.homeList;
    $scope.listClick = myService.sharedObject.navSelect;    
    
});
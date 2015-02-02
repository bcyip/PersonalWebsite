'use strict';

MyApp.controller('PhotosCntrl',function($scope, $route, $routeParams, $location, myService){
    $scope.homeList = myService.sharedObject.homeList;
    $scope.listClick = myService.sharedObject.navSelect;
    $scope.photoList = [{
        'src': 'images/photos/_dsc2151.jpg',
        'thumb': 'images/slides/thumbs/bridge.jpg'
      },{
        'src': 'images/photos/_dsc0625.jpg',
        'thumb': 'images/slides/thumbs/bridge.jpg'
      },{
        'src': 'images/photos/dsc_5666.jpg',
        'thumb': 'images/slides/thumbs/bridge.jpg'
      },{
        'src': 'images/photos/dsc4573.jpg',
        'thumb': 'images/slides/thumbs/bridge.jpg'
      },{
        'src': 'images/photos/dsc2414.jpg',
        'thumb': 'images/slides/thumbs/bridge.jpg'
      },{
        'src': 'images/photos/dsc4095.jpg',
        'thumb': 'images/slides/thumbs/bridge.jpg'
      },{
        'src': 'images/photos/dsc8735.jpg',
        'thumb': 'images/slides/thumbs/bridge.jpg'
    }],
    $scope.$on('$routeChangeSuccess', function() {
      $('#camera_wrap_2').camera({
          height: '600px',
          loader: 'bar',
          fx: 'random',
          overlayer: true,
          portrait: true,
          pagination: false,
          thumbnails: true
      });
    });
});
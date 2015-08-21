"use strict";
angular.module('StarterApp', ['ngRoute','ngResource', 'ngMaterial']);

angular.module('StarterApp').controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

}]);

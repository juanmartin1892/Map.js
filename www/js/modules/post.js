"use strict";
function config ($locationProvider, $routeProvider){

  $routeProvider.when('/', {
    templateUrl: 'js/modules/geo/geoDetails/geo-details.tpl.html',
    controller: 'GeoDetailsController',
    controllerAs : 'geoDetails'
  });
}

angular.module('StarterApp')
.config(config);

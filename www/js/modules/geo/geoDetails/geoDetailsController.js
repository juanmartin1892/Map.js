"use strict";

function GeoDetailsController ($interval){

// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
  var self = this;

  var onSuccess = function(position) {
    self.pos = {};
    self.pos.Latitude = position.coords.latitude;
    self.pos.Longitude= position.coords.longitude;
  };
// onError Callback receives a PositionError object
//
  function onError(error) {
      window.alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
  }

  self.geo = function(){
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  };


  $interval(self.geo, 750);

}

angular.module('StarterApp').controller('GeoDetailsController' , ['$interval',GeoDetailsController]);

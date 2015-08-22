"use strict";

function geoService(){
    var res = {};
    res.pos = {};
    
    var onSuccess = function(position) {
        res.pos.Latitude = position.coords.latitude;
        res.pos.Longitude= position.coords.longitude;
    };

    function onError(error) {
        window.alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

    res.geo = function(){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    
    return res;
}

angular.module('StarterApp').factory('geoService', geoService);

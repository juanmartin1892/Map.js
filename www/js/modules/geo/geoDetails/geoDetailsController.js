"use strict";

function GeoDetailsController ($interval,geoService){
    var self = this;
    geoService.geo();
    self.pos = geoService.pos;
}

angular.module('StarterApp').controller('GeoDetailsController' , ['$interval','geoService',GeoDetailsController]);

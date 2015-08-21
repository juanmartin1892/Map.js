"use strict";

function Post ($resource, BaseUrl){
  return $resource(BaseUrl + 'posts/:postId' , {postId : '@_id'});
}

angular.module('StarterApp').constant('BaseUrl' , 'http://jsonplaceholder.typicode.com/')
  .factory('Post', Post);

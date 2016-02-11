'use strict';

/* Services */

app.factory('TeamService', ['$resource',
  function($resource){
    return $resource('api/teams', {});
  }]);

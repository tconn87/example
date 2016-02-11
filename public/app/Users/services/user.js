'use strict';

/* Services */

app.factory('UserService', ['$resource',
  function($resource){
    return $resource('api/users/:id', {id: '@_id'}, {
      'update':{ method:'PUT'}
    });
  }]);

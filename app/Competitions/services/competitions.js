'use strict';

/* Services */

app.factory('CompService', ['$resource',
  function($resource){
    return $resource('api/competitions/:compId', {compId: '@_id'},{
        'update': { method:'PUT'}
    });
  }]);

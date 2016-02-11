'use strict';

/* Services */

app.factory('WelcomeService', ['$http', function($http){
    return {
      getCompetitions: function(callback){
        $http.get('api/competitions/').success(function(data){
          callback(data);
        }
      )},

      getTeams: function(callback){
        $http.get('api/teams/').success(function(data){
          callback(data);
        }
      )},

      getTeam: function(id, callback){
        $http.get('api/teams/' + id).success(function(data){
          callback(data);
        }
      )},

      getUsers: function(callback){
        $http.get('api/users/').success(function(data){
          callback(data);
        }
      )}
    }
  }]);

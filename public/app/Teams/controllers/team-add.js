'use strict';

/* Add teametition Controller */

app.controller('TeamAddCtrl', ['$scope', '$location', 'TeamService',function($scope, $location, TeamService){
 $scope.team = new TeamService();
 $scope.header = "Create Team";
 $scope.updateTeam = function(team){
   $scope.errors = null;
   $scope.updating = true;
    team.$save(function(){
       $location.path('/teams/');
    }).catch(function(teamData) {
     $scope.errors = [teamData.data.error];
     alert('There was an error saving this team to the database.\n Please try again later');
   }).finally(function() {
     $scope.updating = false;
     $scope.team = new TeamService();
   });
 };
}]);

'use strict';

/* Edit Team Controller */

app.controller('TeamEditCtrl', ['$scope','$routeParams','$location','TeamService',function($scope, $routeParams, $location, TeamService) {
  $scope.header = "Edit Team";
  $scope.team = TeamService.get({ teamId: $routeParams.id });

 $scope.updateTeam = function(team) {
   $scope.errors = null;
   $scope.updating = true;
   // With NgResource
   team.$update(function() {
     $location.path("/teams");
   }).catch(function(teamData) {
     $scope.errors = [teamData.data.error];
     alert("Update Failed. Please wait a moment and try again");
   }).finally(function() {
     $scope.updating = false;
   });
 };
}]);

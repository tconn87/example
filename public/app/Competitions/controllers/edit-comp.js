'use strict';

/* Edit Competition Controller */

app.controller('CompEditCtrl', ['$scope','$routeParams','$location','CompService',function($scope, $routeParams, $location, CompService){

console.log($routeParams.compId);
  $scope.header = "Edit Competition";
  $scope.comp = CompService.get({compId: $routeParams.id});

 $scope.updateComp = function(comp) {
   $scope.errors = null;
   $scope.updating = true;
   // With NgResource
   comp.$update(function(){
     $location.path("/competitions");
   }).catch(function(competitionData) {
     $scope.errors = [competitionData.data.error];
     alert("Update Faild. Please wait a moment and try again");
   }).finally(function() {
     $scope.updating = false;
   });
 };



}]);

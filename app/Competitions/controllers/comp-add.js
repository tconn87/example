'use strict';

/* Add Competition Controller */

app.controller('CompAddCtrl', ['$scope','$location','CompService',function($scope,$location, CompService){
 $scope.comp = new CompService();
 $scope.header = "Create Competition";
 $scope.updateComp = function(comp){
   $scope.errors = null;
   $scope.updating = true;
    comp.$save(function(){
       $location.path('/competitions/');;
    }).catch(function(compData) {
     $scope.errors = [compData.data.error];
     alert('There was an error saving this user to the database.\n Please try again later');
   }).finally(function() {
     $scope.updating = false;
     $scope.comp = new CompService();
   });
 };
}]);

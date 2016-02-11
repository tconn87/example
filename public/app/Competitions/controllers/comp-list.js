'use strict';

/* Competitions List Controller */

app.controller('CompListCtrl', ['$scope','$routeParams', '$location','CompService','$uibModal','$log',function($scope, $routeParams, $location, CompService, $uibModal,$log){
  console.log($uibModal);
    $scope.comps = CompService.query();

    $scope.editComp = function(comp){
      console.log(comp);
      $routeParams.id = comp._id;
      $location.path("competitions/edit/"+comp._id);
      console.log($location.path());
    }
 $scope.animationsEnabled = true;

 $scope.open = function (size,model,idx) {

   var modalInstance = $uibModal.open({
     animation: $scope.animationsEnabled,
     templateUrl: 'myModalContent.html',
     controller: 'ModalInstanceCtrl',
     size: size,
     resolve: {
       model: function() {
         return model;
       }
     }
   });

   modalInstance.result.then(function (deleted) {
     //$scope.selected = selectedItem;
     if(deleted){
       $scope.comps.splice(idx, 1);
     }
     else {

     }
   }, function () {
     $log.info('Modal dismissed at: ' + new Date());
   });
 };

 $scope.toggleAnimation = function () {
   $scope.animationsEnabled = !$scope.animationsEnabled;
 };

}]);

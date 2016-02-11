'use strict';

/* teams List Controller */

app.controller('TeamListCtrl', ['$scope', '$routeParams', '$location', 'TeamService','$uibModal','$log', function($scope, $routeParams, $location, TeamService,$uibModal,$log) {
    $scope.teams = TeamService.query();
    $scope.editTeam = function(team) {
      $routeParams.id = team._id;
      $location.path("teams/edit/"+team._id);
    };
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
          $scope.teams.splice(idx, 1);
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

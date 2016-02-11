'use strict';

/* Users Controller */

app.controller('WelcomeCtrl', ['$scope','WelcomeService',function($scope, WelcomeService){
  WelcomeService.getCompetitions(function(data){
    $scope.competitions = data;
  });
  // WelcomeService.getTeams(function(data){
  //   $scope.teams = data;
  // });
  // WelcomeService.getUsers(function(data){
  //   $scope.users = data;
  // });

  $scope.selectedComp = 0;
  $scope.selectedRow = 0;

  $scope.selectCompetition = function(index){
    $scope.selectedComp = index;

    $scope.teams = $scope.competitions[index].teams;
    if($scope.teams.length > 0){
      $scope.selectedTeam = 0;
      $scope.selectTeam($scope.selectedTeam);
    }else{
      $scope.users = null;
    }
  };
  $scope.selectTeam = function(index){
    $scope.selectedTeam = index;

    WelcomeService.getTeam($scope.teams[index]._id, function(data){
      $scope.users = data.members;
    });
  };
  $scope.setClickedRow = function(index){
    $scope.selectedTeam = index;
  };

}]);

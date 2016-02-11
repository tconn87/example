'use strict';

/* teams List Controller */

app.controller('TeamListCtrl', ['$scope', '$routeParams', '$location', 'TeamService','$uibModal','$log', function($scope, $routeParams, $location, TeamService,$uibModal,$log) {
    // $scope.teams = TeamService.query();
    $scope.teams = [
      {
        name: "Team 1",
        members: [
          {
            email: "not.my@gmail.com",
            name: "Tyler Conn",
            location: "Jonesboro",
            specialty: "A lot of stuff"
          },
          {
            email: "still.not.my@gmail.com",
            name: "Another Person",
            location: "Jonesboro",
            specialty: "A lot of other stuff"
          },
          {
            email: "this.guy@gmail.com",
            name: "This Guy",
            location: "Mobile",
            specialty: "A few different things"
          }
        ]
      },
      {
        name: "Team 2",
        members: [
          {
            email: "gkhan@gmail.com",
            name: "Ghangis Khan",
            location: "Jonesboro",
            specialty: "A lot of stuff"
          },
          {
            email: "k.khan@gmail.com",
            name: "Kubla Khan",
            location: "Jonesboro",
            specialty: "A lot of other stuff"
          },
          {
            email: "f.mulan@gmail.com",
            name: "Fa Mulan",
            location: "China",
            specialty: "Defeating the Huns"
          }
        ]
      },
      {
        name: "Pirates Booty",
        members: [
          {
            email: "free.bird@gmail.com",
            name: "Jack Sparrow",
            location: "Carribean Sea",
            specialty: "Pirating"
          },
          {
            email: "w.turner@portroyal.net",
            name: "William Turner II",
            location: "Looking for Elizabeth",
            specialty: "Claiming lost souls"
          },
          {
            email: "elizabeth.swann@portroyal.gov",
            name: "Elizabeth Swann",
            location: "Port Royal",
            specialty: "Getting into trouble"
          }
        ]
      },
      {
        name: "Losers",
        members: [
          {
            email: "d.jones@footlocker.com",
            name: "Captain Davy Jones",
            location: "Foot Locker",
            specialty: "Claiming lost souls"
          },
          {
            email: "hector.barbossa@blackpearl.com",
            name: "Hector Barbossa",
            location: "Black Pearl",
            specialty: "Captaining"
          },
          {
            email: "c.beckett@england.gov",
            name: "Lord Cutler Beckett",
            location: "England",
            specialty: "Being obnoxious"
          }
        ]
      },
      {
        name: "Toons",
        members: [
          {
            email: "mouse.ears@disney.com",
            name: "Mickey Mouse",
            location: "Clubhouse",
            specialty: "Making children happy"
          },
          {
            email: "goofy@disney.com",
            name: "Goofy Goof",
            location: "Clubhouse",
            specialty: "Being Goofy"
          },
          {
            email: "d.duck@disney.com",
            name: "Donald Duck",
            location: "Clubhouse",
            specialty: "Talking weird"
          }
        ]
      }
    ];
    
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

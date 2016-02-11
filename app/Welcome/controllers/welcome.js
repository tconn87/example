'use strict';

/* Users Controller */

app.controller('WelcomeCtrl', ['$scope','WelcomeService',function($scope, WelcomeService){
  // WelcomeService.getCompetitions(function(data){
  //   $scope.competitions = data;
  // });

  $scope.competitions = [
    {
      name: "One Page Application",
      description: "Build a one page web app",
      objective: "Build a one page web app",
      teams: [
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
        }
      ]
    },
    {
      name: "Next Bench Competition",
      description: "Undetermined",
      objective: "Probably not to build a one page web app",
      teams: [
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
      ]
    }
  ];

  $scope.selectedComp = 0;
  $scope.selectedRow = 0;

  // $scope.teams = $scope.competitions[0].teams;
  // $scope.users = $scope.competitions[0].teams[0].members;

  $scope.selectCompetition = selectComp;
  $scope.selectTeam = selectT;

  selectComp(0);

  $scope.setClickedRow = function(index){
    $scope.selectedTeam = index;
  };

  function selectComp(index){
    $scope.selectedComp = index;

    $scope.teams = $scope.competitions[index].teams;
    if($scope.teams.length > 0){
      $scope.selectedTeam = 0;
      $scope.selectTeam($scope.selectedTeam);
    }else{
      $scope.users = null;
    }
  }

  function selectT(index){
    $scope.selectedTeam = index;
    $scope.users = $scope.competitions[$scope.selectedComp].teams[index].members;
  }
}]);

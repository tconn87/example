'use strict';

/* Users Controller */

app.controller('UserCtrl', ['$scope','UserService',function($scope, UserService){
    //$scope.users = UserService.query();
    $scope.users = [
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
      },
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
      },
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
      },
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
      },
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
    ];

    $scope.newUser = new UserService();

    $scope.addUser = function(newUser){
      if(newUser.name && validateEmail(newUser.email) && newUser.location && newUser.specialty){
        $scope.users.push(newUser);
        resetAddUserForm();

        // newUser.$save().catch(function(userData){
        // }).finally(function(){
        //   $scope.newUser = new UserService();
        //   resetAddUserForm();
        //
        //   $scope.users = UserService.query();
        // })

      }else{
        console.log("newUser.name = " + newUser.name + "newUser.email = " + newUser.email + "Email is valid = " + validateEmail(newUser.email) +
          "newUser.location = " + newUser.location + "newUser.specialty = " + newUser.specialty);

      }
    }

    $scope.removeUser = function(index){
        toggleConfirmDelete(index, true);
    };

    $scope.confirmDelete = function(user){
      var index = $scope.users.indexOf(user);

      if(index > -1){
        $scope.users.splice(index, 1);
      }
      // UserService.delete({ id: user._id }, function(){
      //   $scope.users = UserService.query();
      // });
    };

    $scope.cancelDelete = function(index){
      toggleConfirmDelete(index, false);
    };

    $scope.setClickedRow = function(index){
      if($scope.selectedRow == index){
        $("#user"+$scope.selectedRow).attr("data-toggle", "modal");
        $("#user"+$scope.selectedRow).attr("data-target", "#editModal");

        $scope.editUser = {
          email: $scope.users[index].email,
          name: $scope.users[index].name,
          location: $scope.users[index].location,
          specialty: $scope.users[index].specialty
        };
        // $scope.editUser.name = $scope.users[index].name;
        // $scope.editUser.email = $scope.users[index].email;
        // $scope.editUser.location = $scope.users[index].location;
        // $scope.editUser.specialty = $scope.users[index].specialty;
      }else{
        $("#user"+$scope.selectedRow).removeAttr("data-toggle");
        $("#user"+$scope.selectedRow).removeAttr("data-target");
      }
      $scope.selectedRow = index;
    };

    $scope.updateUser = function(user){
      $scope.users[$scope.selectedRow] = $scope.editUser;

      // UserService.update(user);
    }

    $scope.openEdit = function(index){
      $("#user"+$scope.selectedRow).attr("data-toggle", "modal");
      $("#user"+$scope.selectedRow).attr("data-target", "#editModal");
    }
}]);

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function resetAddUserForm(){
  $("#addUserName").attr("class", "ng-pristine ng-untouched ng-invalid ng-invalid-required ng-untouched");
  $("#addUserEmail").attr("class", "ng-pristine ng-untouched ng-invalid ng-invalid-required ng-untouched");
  $("#addUserLocation").attr("class", "ng-pristine ng-untouched ng-invalid ng-invalid-required ng-untouched");
  $("#addUserSpecialty").attr("class", "ng-pristine ng-untouched ng-invalid ng-invalid-required");
  // $scope.addUserForm.addUserName.$setUntouched();
  // $scope.addUserForm.addUserEmail.$setUntouched();
  // $scope.addUserForm.addUserLocation.$setUntouched();
  // $scope.addUserForm.addUserSpecialty.$setUntouched();
}

function toggleConfirmDelete(index, visibility){
  if(visibility){
    $("#cancel"+index).attr("style", "display: inline;");
    $("#confirm"+index).attr("style", "display: inline;");
    $("#delete"+index).attr("style", "display: none;");
  }else{
    $("#cancel"+index).attr("style", "display: none;");
    $("#confirm"+index).attr("style", "display: none;");
    $("#delete"+index).attr("style", "display: inline;");
  }
}

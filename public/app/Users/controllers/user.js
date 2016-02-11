'use strict';

/* Users Controller */

app.controller('UserCtrl', ['$scope','UserService',function($scope, UserService){
    $scope.users = UserService.query();
    $scope.newUser = new UserService();

    $scope.addUser = function(newUser){
      if(newUser.name && validateEmail(newUser.email) && newUser.location && newUser.specialty){
        newUser.$save().catch(function(userData){
        }).finally(function(){
          $scope.newUser = new UserService();
          resetAddUserForm();

          $scope.users = UserService.query();
        })

      }else{
        console.log("newUser.name = " + newUser.name + "newUser.email = " + newUser.email + "Email is valid = " + validateEmail(newUser.email) +
          "newUser.location = " + newUser.location + "newUser.specialty = " + newUser.specialty);

      }
    }

    $scope.removeUser = function(index){
        toggleConfirmDelete(index, true);
    };

    $scope.confirmDelete = function(user){
      UserService.delete({ id: user._id }, function(){
        $scope.users = UserService.query();
      });
    };

    $scope.cancelDelete = function(index){
      toggleConfirmDelete(index, false);
    };

    $scope.setClickedRow = function(index){
      if($scope.selectedRow == index){
        $("#user"+$scope.selectedRow).attr("data-toggle", "modal");
        $("#user"+$scope.selectedRow).attr("data-target", "#editModal");

        $scope.editUser = $scope.users[index];
      }else{
        $("#user"+$scope.selectedRow).removeAttr("data-toggle");
        $("#user"+$scope.selectedRow).removeAttr("data-target");
      }
      $scope.selectedRow = index;
    };

    $scope.updateUser = function(user){
      UserService.update(user);
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

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, model) {

  $scope.ok = function () {

    $scope.errors = null;
    $scope.updating = true;
    model.$delete(function(){
      $uibModalInstance.close(true);
    }).catch(function(){
      alert("Delete Failed. Please wait a moment and try again");
      $scope.errors = [competitionData.data.error];
    }).finally(function(){
      $scope.updating = false;
    });

  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

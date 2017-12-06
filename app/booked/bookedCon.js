angular
  .module("devmtnTravel")
  .controller("bookedCon", function($scope, $stateParams, mainSrvc) {
    mainSrvc
      .getPackageInfo()
      .then(response => {
        console.log("booked response", response);
        $scope.allPackages = response;
        if ($stateParams.id) {
          $scope.packageIndex = $scope.allPackages.findIndex(
            package => package.id === parseInt($stateParams.id)
          );

          if ($scope.packageIndex !== -1) {
            $scope.package = $scope.allPackages[$scope.packageIndex];
          }
        }
      })
      .catch(console.log);
  });

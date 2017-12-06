angular.module('devmtnTravel').controller('packagesCon', function($scope, $stateParams, mainSrvc){
  mainSrvc.getPackageInfo().then(response => {
    $scope.allPackages = response;
    if ($stateParams.country) {
      $scope.packages = $scope.allPackages.filter(package => package.country == $stateParams.country)
    }
  })
});
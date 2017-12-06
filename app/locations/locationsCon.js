angular
  .module("devmtnTravel")
  .controller("locationsCon", function($scope, mainSrvc) {
    mainSrvc.getTravelInfo().then(response => {
      console.log(response);
      $scope.locations = response;
    });
  });

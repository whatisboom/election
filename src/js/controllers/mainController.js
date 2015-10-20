angular.module('election').controller('mainController', function($scope, $location) {
  $scope.title = 'Oauth';

  if (localStorage.oauth) {
    $location.path('/vote');
  }

  $scope.oauth = function() {
    localStorage.oauth = true;
    $location.path('/vote');
  }
});
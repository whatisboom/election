angular.module('election').controller('mainController', function($scope, $location) {
  $scope.title = 'Oauth';

  if (localStorage.oauth) {
    $location.path('/polls');
  }

  $scope.oauth = function() {
    localStorage.oauth = true;
    $location.path('/polls');
  }
});
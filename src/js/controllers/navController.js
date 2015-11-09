angular.module('election').controller('navController', function($scope, $location) {
  $scope.goto = function(path) {
    $location.path(path);
  };

  $scope.isActive = function(path) {
    if ($location.path() === path) {
      return true;
    }
    return false;
  }
});
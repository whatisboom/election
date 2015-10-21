angular.module('election').controller('listController', function($scope, resourceFactory) {
  $scope.title = 'Vote!';

  var polls = resourceFactory.polls;

  polls.read().$promise.then(function(response) {
    $scope.polls = response.polls;
  });

  $scope.goto = function(poll) {
    console.log(poll);
  }
})
angular.module('election').controller('listController', function($scope, $location, resourceFactory) {
  $scope.title = 'Vote!';

  var polls = resourceFactory.polls;

  polls.read().$promise.then(function(response) {
    $scope.polls = response.polls;
  });

  $scope.goto = function(poll) {
    $location.path('/polls/' + poll.slug)
  }
})
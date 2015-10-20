angular.module('election').controller('voteController', function($scope) {
  $scope.title = 'Vote!';

  $scope.options = [{
    name: 'one'
  },{
    name: 'two'
  },{
    name: 'three'
  }]

  $scope.vote = function(option) {
    console.log(option.name);
  }
})
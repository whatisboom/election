angular.module('election').controller('voteController', function($scope) {
  $scope.title = 'Vote!';

  $scope.options = [{
    title: 'one',
    id: 'one'
  },{
    title: 'two',
    id: 'two'
  },{
    title: 'three',
    id: 'three'
  }];

  $scope.vote = function(option) {
    console.log(option.name);
  }
})
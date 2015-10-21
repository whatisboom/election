var app = angular.module('election')

app.config(function($locationProvider) {
  if (history.pushState) {
    $locationProvider.html5Mode(true);
  }
})

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'html/partials/main.html',
      controller: 'mainController'
    })
    .when('/polls', {
      templateUrl: 'html/partials/list.html',
      controller: 'listController'
    })
    .when('/vote/:id', {
      templateUrl: 'html/partials/vote.html',
      controller: 'voteController'
    });
})
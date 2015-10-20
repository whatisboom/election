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
    .when('/vote', {
      templateUrl: 'html/partials/vote.html',
      controller: 'voteController'
    })
    .when('/vote/:id', {
      templateUrl: 'html/partials/vote.html',
      controller: 'voteController'
    });
})
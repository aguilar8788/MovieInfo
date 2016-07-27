var app = angular.module("movieApp", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("search", {
      url: "/search/:id",
      templateUrl: "/templates/search.html",
      controller: "SearchController"
    })
    .state("show", {
      url: "/show/:id",
      templateUrl: "/templates/show.html",
      controller: "ShowController"
    })
    $locationProvider.html5Mode(true);
})

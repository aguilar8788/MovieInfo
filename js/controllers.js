app.factory('dataTransfer', function(){
    var savedData = [];
    return {
      setData: function(data) {
        savedData.push(data);
      },
      getData: function() {
        return savedData;
      }
    }
});



app.controller("SearchController", function ($scope, $http, dataTransfer, $stateParams) {
  $scope.home = {};
  $scope.home.params = $stateParams;
  $scope.home.movieResults = [];

  $scope.home.searchMovie = function(params) {
    $http.get('http://www.omdbapi.com/?s=' + params.id).then(function(data) {
      for(var i = 0; i < data.data.Search.length; i++){
      $scope.home.movieResults.push(data.data.Search[i]);
      }
    })
  }

  $scope.home.searchMovie($scope.home.params);
})

app.controller("ShowController", function($scope, $http, dataTransfer, $stateParams) {
  $scope.show = {};
  $scope.show.params = $stateParams;
  $scope.show.movie = [];
  $http.get('http://www.omdbapi.com/?i=' + $scope.show.params.id).then(function(data) {
    $scope.show.movie.push(data.data);
  })
})

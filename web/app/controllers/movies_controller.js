app.controller('MoviesController', function($scope, FirebaseService){
        $scope.movies = FirebaseService.getMovies();
});

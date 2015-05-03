app.controller('MovieEditController', function ($scope, FirebaseService, $routeParams, $location) {
    var id = $routeParams.id;
    $scope.movie = FirebaseService.getMovie(id);

    $scope.save = function () {
        $scope.movie.$save();
        //FirebaseService.updateMovie($scope.movie);
        $location.path("/movie/"+id);
    }
});

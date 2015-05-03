app.controller('NewMovieController', function($scope, $location, FirebaseService){
        $scope.addmovie = function() {
            FirebaseService.createMovie({
                name: $scope.name,
                director: $scope.director,
                year: $scope.year,
                desc: $scope.desc
            });
            $location.path("/");
        }
});

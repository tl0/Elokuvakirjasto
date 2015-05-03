app.controller('MovieController', function($scope, FirebaseService, $routeParams){
    var id = $routeParams.id;
    $scope.movie = FirebaseService.getMovie(id);
});

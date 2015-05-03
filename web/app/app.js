// Toteuta moduulisi tänne
var app = angular.module('MovieApp', ['firebase', 'ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            
            .when('/movie/new', {
                controller: 'NewMovieController',
                templateUrl: 'app/views/addmovie.html'
            })
            .when('/movies', {
                controller: 'MoviesController',
                templateUrl: 'app/views/movies.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});



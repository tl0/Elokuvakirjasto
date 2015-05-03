// Toteuta moduulisi tänne
var app = angular.module('MovieApp', ['firebase', 'ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

            .when('/movie/new', {
                controller: 'NewMovieController',
                templateUrl: 'app/views/addmovie.html'
            })
            .when('/movie/:id', {
                controller: 'MovieController',
                templateUrl: 'app/views/movie.html'
            })
            .when('/movie/:id/edit', {
                controller: 'MovieEditController',
                templateUrl: 'app/views/editmovie.html'
            })
            .when('/movies', {
                controller: 'MoviesController',
                templateUrl: 'app/views/movies.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});



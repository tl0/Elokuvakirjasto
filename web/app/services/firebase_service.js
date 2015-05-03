app.service('FirebaseService', function($firebase) {
    var ref = new Firebase("https://tl0-elokuvakirjasto.firebaseio.com/");
    var movies = $firebase(ref.child('movies')).$asArray();
    
    this.getMovies = function() {
        return movies;
    }
    this.createMovie = function(i) {
        movies.$add(i);
    }
    this.getMovie = function(i) {
        return $firebase(ref.child("movies").child(i)).$asObject();
    }
    this.updateMovie = function(i) {
        movies.$save(i);
    }
    this.deleteMovie = function(i) {
        movies.$remove(i);
    }
});

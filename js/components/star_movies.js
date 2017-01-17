app.component('starMovies', {
    templateUrl: 'templates/star_movies.html',
    controllerAs: 'ctrl',
    controller: function starMoviesController($routeParams,$http,$q,$location) {

        this.$onInit = function () {

            this.data = {};
            this.getMovieData($routeParams.id);

        };

        this.getMovieData = function(id) {
            var comp = this;
            $http({
                method: 'GET',
                url: 'http://swapi.co/api/films/'+id+'/'
            }).then(function successCallback(response) {
                comp.data = response.data;
            }, function errorCallback(response) {
                console.log('error occured');
            });
        };

        this.toBack = function() {
            $location.url('/');
        };
    }
});

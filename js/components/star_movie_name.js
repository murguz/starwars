app.component('starMovieName', {
    templateUrl: 'templates/star_movie_name.html',
    controllerAs: 'ctrl',
    bindings: {
        url: '='
    },
    controller: function starMovieNameController($routeParams,$http,$q,$location) {

        this.$onInit = function () {

            console.log(this.url);
            this.getMovieData(this.url);

        };

        this.getMovieData = function(url) {
            var comp = this;
            $http({
                method: 'GET',
                url: url
            }).then(function successCallback(response) {
                comp.data = response.data;
                var parts = comp.data.url.split("/");
                var id = parts[parts.length-2];
                comp.data.href_url = "./movie/"+id;
            }, function errorCallback(response) {
                console.log('error occured');
            });
        };
    }
});

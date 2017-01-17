app.component('starWars', {
    templateUrl: 'templates/star_wars.html',
    controllerAs: 'ctrl',
    controller: function starWarsController($http,$q,$location) {

        this.$onInit = function () {
            this.cancellar = null;
            this.view = 0; // 0 - default , 1 - loading, 2 - content loaded
            this.results = [];
        };

        this.search = function(event) {

            this.view = 1;
            //console.log(event);
            this.searchType = event.type;
            var searchTypeText = "";
            if(event.type == 0) {
                searchTypeText = "people";
            } else {
                searchTypeText = "films";
            }

            this.canceller = $q.defer();

            var requestPromise = $http({
                url: 'http://swapi.co/api/'+searchTypeText+'/?search='+event.text,
                timeout: this.canceller.promise
            });

            var component = this;

            requestPromise.
                success(function(data, status, headers, config) {
                    console.log(data);
                    component.results = data.results;

                    if(component.searchType == 0) { // people
                        component.view = 2;
                    }else{
                        component.view = 3;
                    }

                }).
                error(function(data, status, headers, config) {
                    if(status == -1) {
                        console.log("request cancelled");
                        component.view = 0;
                    }
                    else {
                        console.log("error happened");
                    }
                });
        };

        this.finish = function() {
            this.canceller.resolve();
        };

        this.toPeople = function(url) {
            var parts = url.split("/");
            var id = parts[parts.length-2];
            $location.url('/people/'+id);
        };

        this.toMovie = function(url) {
            var parts = url.split("/");
            var id = parts[parts.length-2];
            $location.url('/movie/'+id);
        };
    }
});

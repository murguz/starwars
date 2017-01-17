app.component('starPeople', {
    templateUrl: 'templates/star_people.html',
    controllerAs: 'ctrl',
    controller: function starPeopleController($routeParams,$http,$q,$location) {

        this.$onInit = function () {

            this.data = {};
            this.getPeopleData($routeParams.id);

        };

        this.getPeopleData = function(id) {
            var comp = this;
            $http({
                method: 'GET',
                url: 'http://swapi.co/api/people/'+id+'/'
            }).then(function successCallback(response) {
                comp.data = response.data;
                console.log(comp.data);
            }, function errorCallback(response) {
                console.log('error occured');
            });
        };

        this.toBack = function() {
            $location.url('/');
        };
    }
});

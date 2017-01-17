var app = angular.module('starWarsApp', ['ngAnimate', 'ngSanitize', 'ngRoute', 'ui.bootstrap']);

app.config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({enabled:true});
    $routeProvider
        .when("/", {
            template : "<star-wars></star-wars>"
        })
        .when("/people/:id", {
            template : "<star-people></star-people>"
        })
        .when("/movie/:id", {
            template : "<star-movies></star-movies>"
        });
});

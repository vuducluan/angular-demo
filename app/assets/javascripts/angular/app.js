'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);
 
myApp.config(['$routeProvider', function($routeProvider) {
 
    $routeProvider.otherwise({redirectTo: '/home'});
 
    $routeProvider.when('/home', {
        templateUrl: '/assets/home.html'
    });
    
    $routeProvider.when('/projects', {
        templateUrl: '/assets/projects.html',
        controller: 'UsersCtrl'
    });
    
    $routeProvider.when('/services', {
        templateUrl: '/assets/services.html'
    });
    
    $routeProvider.when('/downloads', {
        templateUrl: '/assets/downloads.html'
    });
    
    $routeProvider.when('/about', {
        templateUrl: '/assets/about.html'
    });
    
    $routeProvider.when('/contact', {
        templateUrl: '/assets/contact.html'
    });
 
}]);

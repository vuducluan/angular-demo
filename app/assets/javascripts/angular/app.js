'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
 
    $routeProvider.otherwise({redirectTo: '/home'});
 
    $routeProvider.when('/home', {
        templateUrl: '/assets/home.html'
    });
    
    $routeProvider.when('/projects', {
        templateUrl: '/assets/projects.html'
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
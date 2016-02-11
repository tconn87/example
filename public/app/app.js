'use strict';

/* App Module */
var app = angular.module('app', ['ngRoute','ngResource','ui.bootstrap','ui.bootstrap.tpls']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'app/Welcome/views/welcome.html',
        controller: 'WelcomeCtrl'
      }).when('/users', {
        templateUrl: 'app/Users/views/user-list.html',
        controller: 'UserCtrl'
      }).when('/users/manage', {
        templateUrl: 'app/Users/views/user-manage.html',
        controller: 'UserCtrl'
      }).when('/teams/edit/:id', {
        templateUrl: 'app/Teams/views/team-edit.html',
        controller: 'TeamEditCtrl'
      }).when('/teams/', {
        templateUrl: 'app/Teams/views/team-list.html',
        controller: 'TeamListCtrl'
      }).when('/teams/add', {
        templateUrl: 'app/Teams/views/team-edit.html',
        controller: 'TeamAddCtrl'
      }).when('/competitions/edit/:id', {
        templateUrl: 'app/Competitions/views/comp-edit.html',
        controller: 'CompEditCtrl'
      }).when('/competitions/', {
        templateUrl: 'app/Competitions/views/comp-list.html',
        controller: 'CompListCtrl'
      }).when('/competitions/add', {
        templateUrl: 'app/Competitions/views/comp-edit.html',
        controller: 'CompAddCtrl'
      }).otherwise({
        redirectTo: '/'
      });
}]);
app.controller('HeaderCtrl', ['$scope','$location', function($scope,$location){
  $scope.isNavbarActive = function (navBarPath) {
          navBarPath = navBarPath.toLowerCase();
          var pathElements = $location.path().split('/');
          return (navBarPath === pathElements[1].toLowerCase());
  };
}]);

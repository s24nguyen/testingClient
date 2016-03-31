'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactUsCtrl'
      })
      .when('/faqs', {
        templateUrl: 'views/faqs.html',
        controller: 'FaqsCtrl',
        controllerAs: 'faqs'
      })
      .when('/player2', {
        templateUrl: 'views/player2.html',
        controller: 'Player2Ctrl',
        controllerAs: 'player2'
      })
      .when('/playerprofile', {
        templateUrl: 'views/playerprofile.html',
        controller: 'PlayerProfileCtrl',
        controllerAs: 'playerprofile'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/mainLogin', {
        templateUrl: 'views/mainLogin.html',
        controller: 'MainLoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

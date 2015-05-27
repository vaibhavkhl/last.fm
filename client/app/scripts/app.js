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
    'ngMessages',
    'ui.router',
    'ng-token-auth'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      });

    $urlRouterProvider.otherwise('/login');

    $authProvider.configure({
      apiUrl: 'http://localhost:3000'
    });
  });

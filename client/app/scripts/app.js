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
    'ng-token-auth',
    'formly',
    'formlyBootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .state('notauthorized', {
        url: '/notauthorized',
        templateUrl: 'views/notauthorized.html',
        controller: 'NotauthorizedCtrl'
      });

    $urlRouterProvider.otherwise('/login');

    $authProvider.configure({
      apiUrl: '/api'
    });
  })
  .run(function ($rootScope, $state) {
    $rootScope.$on('auth:login-success', function(ev) {
      $state.go('home');
    });

    $rootScope.$on('auth:logout-success', function(ev) {
      console.log('goodbye');
    });

    $rootScope.$on('auth:validation-success', function() {
      console.log('validated, user is allowed');
    });

    $rootScope.$on('auth:invalid', function() {
      console.log('unauthorized');
      $state.go('login');
    });

  });

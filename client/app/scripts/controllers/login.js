'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $auth) {
    $scope.user = {};

    $scope.submit = function() {
      $auth.submitLogin($scope.user)
        .then(function(resp) {
          console.log('success')
        })
        .catch(function(resp) {
          $scope.errors = resp.errors[0];
        });
    };

    $scope.userFields = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email address',
        placeholder: 'Enter email'
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Password'
      }
    }
    ];
  });

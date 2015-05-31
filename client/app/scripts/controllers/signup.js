'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SignupCtrl', function ($scope, $auth, $state) {
    $scope.user = {};

    $scope.submit = function() {
      $auth.submitRegistration($scope.user)
        .then(function(resp) {
          $state.go('home')
        })
        .catch(function(resp) {
          $scope.errors = resp.data.errors.full_messages[0];
        });
    };

    // angular-formly
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
    },
    {
    	key: 'password_confirmation',
    	type: 'input',
    	templateOptions: {
        type: 'password',
        label: 'Confirm Password',
        placeholder: 'Password'
      }
    }
    ];
  });

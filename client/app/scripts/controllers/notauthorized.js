'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NotauthorizedCtrl
 * @description
 * # NotauthorizedCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('NotauthorizedCtrl', function ($scope, $timeout, $state) {
    $timeout(function() {
    	$state.go('login');
    } , 1000);
  });

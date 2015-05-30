'use strict';

angular.module('clientApp')
  .controller('IndexCtrl', function ($scope, $auth, $state, $rootScope) {
  	console.log('index ctrl')
  	$scope.signOut = function() {
  		$auth.signOut().then(function() {
  			$rootScope.user = null;
  			$state.go('login');
  		});
  	};
  });
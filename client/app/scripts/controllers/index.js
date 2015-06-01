'use strict';

angular.module('clientApp')
  .controller('IndexCtrl', function ($scope, $auth, $state) {

  	$scope.signOut = function() {
  		$auth.signOut().then(function() {
  			$state.go('login');
  		});
  	};

  });
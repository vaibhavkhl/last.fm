'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('HomeCtrl', function ($scope, lastFm) {

  	$scope.showSearch = false;
  	$scope.showTracks = false;

    $scope.search = function(query) {
    	lastFm.search(query).then(function(response) {
    		$scope.showSearch = true;
    		$scope.artists = response.data.results.artistmatches.artist;
    	});
    };

    $scope.getTracks = function(artist) {
    	lastFm.getTracks(artist).then(function(response) {
    		$scope.showSearch = false;
    		$scope.showTracks = true;
    		$scope.topTracks = response.data.toptracks.track;
    	});
    };
  });

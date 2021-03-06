'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('HomeCtrl', function ($scope, lastFm, $rootScope, searchHistory) {

  	$scope.showSearch = false;
  	$scope.showTracks = false;
    var userId = $rootScope.current_user.id;
    getSearchHistory();

    $scope.search = function(query) {
    	$scope.loading = true;
    	lastFm.search(query).then(function(response) {
    		$scope.loading = false;
    		$scope.showSearch = true;
    		$scope.artists = response.data.results.artistmatches.artist;
    	});

      searchHistory.create(query, userId).then(function() {
        getSearchHistory();
      });
    };

    $scope.getArtistInfo = function(artist) {
    	$scope.loading = true;
    	$scope.showSearch = false;
    	$scope.showArtistInfo = true;

    	lastFm.getTracks(artist).then(function(response) {
    		$scope.loading = false;
    		$scope.topTracks = response.data.toptracks.track;
    	});

    	lastFm.getAlbums(artist).then(function(response) {
    		$scope.albums = response.data.topalbums.album;
    	});

    	lastFm.getSimilar(artist).then(function(response) {
    		$scope.similarArtist = response.data.similarartists.artist;
    	});
    };

    function getSearchHistory() {
      searchHistory.all().then(function(response) {
        $scope.searchHistories = _.where(response.data, {user_id: userId});
      });
    }
  });

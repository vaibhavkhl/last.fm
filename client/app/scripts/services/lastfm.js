'use strict';

/**
 * @ngdoc service
 * @name clientApp.lastFm
 * @description
 * # lastFm
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('lastFm', function ($http) {
  	// AngularJS will instantiate a singleton by calling "new" on this function
    var baseUrl = 'http://ws.audioscrobbler.com/2.0/';
    var apikey = '3c3a2bae12b83afb0b4af378d2783f08';

    this.search = function(query) {
    	return $http.get(baseUrl + '?method=artist.search&artist=' + query + '&api_key=' + apikey + '&format=json')
    };

    this.getTracks = function(artist) {
    	return $http.get(baseUrl + '?method=artist.gettoptracks&artist=' + artist + '&api_key=' + apikey + '&format=json')
    };

    this.getAlbums = function(artist) {
    	return $http.get(baseUrl + '?method=artist.gettopalbums&artist=' + artist + '&api_key=' + apikey + '&format=json')
    };

    this.getSimilar = function(artist) {
    	return $http.get(baseUrl + '?method=artist.getsimilar&artist=' + artist + '&api_key=' + apikey + '&format=json')
    };

  });

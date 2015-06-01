'use strict';

/**
 * @ngdoc service
 * @name clientApp.searchHistory
 * @description
 * # searchHistory
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('searchHistory', function ($http, $auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.all = function() {
      return $http.get($auth.apiUrl() + '/search_histories');
    };

    this.create = function(query, id) {
      return $http.post($auth.apiUrl() + '/search_histories', {search_history: {artist: query, user_id: id}});
    };
  });

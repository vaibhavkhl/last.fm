"use strict";angular.module("clientApp",["ngMessages","ui.router","ng-token-auth","formly","formlyBootstrap"]).config(["$stateProvider","$urlRouterProvider","$authProvider",function(a,b,c){a.state("login",{url:"/login",templateUrl:"views/login.html",controller:"LoginCtrl"}).state("signup",{url:"/signup",templateUrl:"views/signup.html",controller:"SignupCtrl"}).state("home",{url:"/home",templateUrl:"views/home.html",controller:"HomeCtrl",resolve:{auth:["$auth",function(a){return console.log("validating user"),a.validateUser()}]}}).state("notauthorized",{url:"/notauthorized",templateUrl:"views/notauthorized.html",controller:"NotauthorizedCtrl"}),b.otherwise("/login"),c.configure({apiUrl:"/api"})}]).run(["$rootScope","$state",function(a,b){a.$on("auth:login-success",function(a,c){console.log("Successful login!"),b.go("home")}),a.$on("auth:logout-success",function(a){console.log("goodbye")}),a.$on("auth:validation-success",function(){console.log("validated, user is allowed")}),a.$on("auth:invalid",function(){console.log("unauthorized"),b.go("login")})}]),angular.module("clientApp").controller("LoginCtrl",["$scope","$auth","$rootScope",function(a,b,c){a.user={},a.submit=function(){b.submitLogin(a.user).then(function(a){c.current_user=a})["catch"](function(b){a.errors=b.errors[0]})},a.userFields=[{key:"email",type:"input",templateOptions:{type:"email",label:"Email address",placeholder:"Enter email"}},{key:"password",type:"input",templateOptions:{type:"password",label:"Password",placeholder:"Password"}}]}]),angular.module("clientApp").controller("SignupCtrl",["$scope","$auth","$state","$rootScope",function(a,b,c,d){a.user={},a.submit=function(){b.submitRegistration(a.user).then(function(a){d.current_user=a,c.go("home")})["catch"](function(b){a.errors=b.data.errors.full_messages[0]})},a.userFields=[{key:"email",type:"input",templateOptions:{type:"email",label:"Email address",placeholder:"Enter email"}},{key:"password",type:"input",templateOptions:{type:"password",label:"Password",placeholder:"Password"}},{key:"password_confirmation",type:"input",templateOptions:{type:"password",label:"Confirm Password",placeholder:"Password"}}]}]),angular.module("clientApp").controller("HomeCtrl",["$scope","lastFm","$rootScope","searchHistory",function(a,b,c,d){function e(){d.all().then(function(b){a.searchHistories=_.where(b.data,{user_id:f})})}a.showSearch=!1,a.showTracks=!1;var f=c.current_user.id;e(),a.search=function(c){a.loading=!0,b.search(c).then(function(b){a.loading=!1,a.showSearch=!0,a.artists=b.data.results.artistmatches.artist}),d.create(c,f).then(function(){e()})},a.getArtistInfo=function(c){a.loading=!0,a.showSearch=!1,a.showArtistInfo=!0,b.getTracks(c).then(function(b){a.loading=!1,a.topTracks=b.data.toptracks.track}),b.getAlbums(c).then(function(b){a.albums=b.data.topalbums.album}),b.getSimilar(c).then(function(b){a.similarArtist=b.data.similarartists.artist})}}]),angular.module("clientApp").controller("IndexCtrl",["$scope","$auth","$state","$rootScope",function(a,b,c,d){a.signOut=function(){b.signOut().then(function(){c.go("login")})}}]),angular.module("clientApp").service("lastFm",["$http",function(a){var b="https://ws.audioscrobbler.com/2.0/",c="3c3a2bae12b83afb0b4af378d2783f08";this.search=function(d){return a.get(b+"?method=artist.search&artist="+d+"&api_key="+c+"&format=json")},this.getTracks=function(d){return a.get(b+"?method=artist.gettoptracks&artist="+d+"&api_key="+c+"&format=json")},this.getAlbums=function(d){return a.get(b+"?method=artist.gettopalbums&artist="+d+"&api_key="+c+"&format=json")},this.getSimilar=function(d){return a.get(b+"?method=artist.getsimilar&artist="+d+"&api_key="+c+"&format=json")}}]),angular.module("clientApp").controller("NotauthorizedCtrl",["$scope","$timeout","$state",function(a,b,c){b(function(){c.go("login")},1e3)}]),angular.module("clientApp").service("searchHistory",["$http","$auth",function(a,b){this.all=function(c){return a.get(b.apiUrl()+"/search_histories")},this.create=function(c,d){return a.post(b.apiUrl()+"/search_histories",{search_history:{artist:c,user_id:d}})}}]);
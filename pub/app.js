'use strict';

angular.module('cpl', ['ngMaterial', 'ui.router', 'ngStorage', 'xml'])
    .config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/rss");

	$stateProvider
	    .state('home', {
		url:'/',
		templateUrl: "views/home.html",
		controller: 'HomeCtrl as home'
	    })
	    .state('home.rss', {
		url:'rss',
		templateUrl:'views/rss.html',
		controller:'RssCtrl as rss'
	    });
  });

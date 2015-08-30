'use strict';

angular.module('cpl')
  .controller('HomeCtrl', function($state, $mdSidenav){

      $state.go('home.rss');

      this.openSideNav = function(){
	  $mdSidenav('left').open();
      };

      this.closeSideNav = function(){
	  $mdSidenav('left').close();
      };


  });

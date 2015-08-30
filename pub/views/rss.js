'use strict';

angular.module('cpl')
  .controller('RssCtrl', function($localStorage, $stateParams, $state){

      var that = this;

      this.urls = $localStorage.urls||[];
      this.currentUrl = $stateParams.url||$localStorage.currentUrl||'';

      this.addUrl = function(url){
	  that.nuUrl = '';
	  that.currentUrl = url;
	  if(that.urls.indexOf(url)>-1) return;
	  that.urls.push(url);

	  $localStorage.urls = that.urls;
      };

      this.setUrl = function(url){
	  that.currentUrl = url;
	  $localStorage.currentUrl = that.currentUrl;
	  $state.go('home.rss', {url:encodeURIComponent(url)});
      };
      
      this.closeUrl = function(ind){
	  var closingCurrent = false;
	  if(that.urls[ind] === that.currentUrl) closingCurrent = true;

	  that.urls.splice(ind,1);
	  $localStorage.urls = that.urls;

	  if(closingCurrent && that.urls.length)
	      that.setUrl(that.urls[Math.min(that.urls.length-1, ind)]);
      };

  });

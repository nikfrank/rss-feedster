'use strict';

angular.module('cpl')
    .directive('rssUrl', function(){
	return {
	    templateUrl: 'components/rss-url.html',
	    scope:{rssUrl:'=', close:'&rssUrlClose'}
	};
    });

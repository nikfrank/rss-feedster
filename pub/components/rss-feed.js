'use strict';

angular.module('cpl')
    .directive('rssFeed', function($sce){
	return {
	    templateUrl: 'components/rss-feed.html',
	    restrict: 'A',
	    scope:{
		url:'=rssFeed'
	    },
	    transclude:false,
	    controllerAs:'rfd',
	    controller: function($scope, feeds){
		// grab rss feed items
		// in super demo here grab from cani-storage cache
		var that = this;

		$scope.$watch('url', function(n, o){
		    if(!n) return;
		    feeds.get($scope.url).then(function(res){
			var randomizer = ($scope.url.charCodeAt(0)+($scope.url.charCodeAt(1)||0)+
					  ($scope.url.charCodeAt(2)||0))/3;
			randomizer = randomizer - randomizer%1;

			that.items = res.rss.channel.item.slice(randomizer,randomizer+10).filter(function(d){
			    return (typeof d.description === 'string');
			}).map(function(d, i){
			    d.description = $sce.trustAsHtml(d.description);
			    d.id = randomizer + i;
			    return d;
			});
		    });
		});
		
	    }
	};
    });

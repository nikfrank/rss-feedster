'use strict';

angular.module('cpl')
    .directive('navIcon', function(){
	return {
	    templateUrl: 'components/nav-icon.html',
	    restrict: 'A',
	    scope:{
		sref:'@navIconSref', navIcon:'@'
	    },
	    transclude:false,
	    controllerAs:'nvb',
	    controller: function(){
			
	    }
	};
    });

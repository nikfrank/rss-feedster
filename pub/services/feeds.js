'use strict';

angular.module('cpl')
    .service('feeds', function($http, $q, x2js){
	var that = this;

	this.get = function(url){
	    var def = $q.defer();
	    $http.post('/feed',{
		url:url
	    }).then(function(res){
		if(res.data.slice(0,10).indexOf('<?xml')>-1)
		    def.resolve(x2js.xml2json(x2js.parseXmlString(res.data)));
		else try{
		    def.resolve(JSON.parse(res.data));
		} catch(e) {
		    def.reject('not xml or JSON');
		}
	    });
	    return def.promise;
	};

    });

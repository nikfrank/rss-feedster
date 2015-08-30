var express = require('express')
  , http = require('http')
  , path = require('path')
  , request = require('request');

var app = express();

var RC = require('node-request-caching');
var rc = new RC();


app.configure(function(){
  app.set('port', process.env.PORT || 8888);
  app.set('views', __dirname + '/public');
  app.use(express.favicon('./favicon.ico'));
  app.use(express.static(__dirname + '/pub'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'pub')));

});

app.get('/', function(req, res){
    res.sendfile('./'+pwd+'/index.html');
});

app.post('/feed', function(req, res){
    rc.get('http://www.feedforall.com/blog-feed.xml', {}, 3600, function (error, response, body) {
	if (!error && response.statusCode == 200) {
	    res.end(body);
	}else{
	    res.status(403).end(error);
	}
    })
});

var pwd = process.argv[2]||'';

app.get('*', function(req, res){
    var cleanurl = req.url.split('?')[0];

    res.sendfile('./'+pwd+cleanurl);
});

app.listen(process.env.PORT||8888, function(){
  console.log("Express server listening on port " + app.get('port'));
});


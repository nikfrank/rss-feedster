spec version available at https://github.com/nikfrank/rss-feedster.git and rss-feedster.herokuapp.com


to run locally just do $$$ npm i && node static pub


the demo RSS feeds listed were a bit sketchy, so what I've done is take one that worked (http://www.feedforall.com/blog-feed.xml) and have the server requesting it no matter what the req.body.url is requested from angular. To keep things interesting, the feeds service randomizes the slice of that output displayed based on the url typed in. At least this way the url feels like it does something.


(shame on my markdown skills)
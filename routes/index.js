var express = require('express');
var router = express.Router();

router.get('/express', function(req, res, next) {
  res.render('index', { title: 'React' });
});

var links = [];

router.get('/api/links', function(req, res, next) {
  res.json({ links: links });
});

router.post('/api/links', function(req, res, next) {
  var newLink = req.body;
  newLink.id = Date.now();
  links.push(newLink);
  res.json(newLink);
});

router.post('/api/deleteLink', function(req, res, next) {
  var deletedBookmarkId = req.body.id;
  for (var i = 0; i < links.length; i++) {
    if (links[i].id == deletedBookmarkId) {
      links.splice(i, 1);
    }
  }
  console.log({ links: links });
  res.json({ links: links });
});

router.post('/api/likeLink', function(req, res, next) {
  var likedBookmarkId = req.body.id;
  for (var i = 0; i < links.length; i++) {
    if (links[i].id == likedBookmarkId) {
      links[i].liked = links[i].liked ? !links[i].liked : true;
    }
  }
  res.json({ links: links });
});

router.post('/api/ipLikeBookmark', function(req, res, next) {
  var ip = req.connection.remoteAddress;
  var bookmarkId = req.body.id;
  var bookmarkTitle = req.body.title;
  res.json({ ip: ip, title: bookmarkTitle });
});

module.exports = router;

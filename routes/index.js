var express = require('express');
var file = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //if (req.cookies.user)
    //res.render('log_in',{user:req.cookies.mail});
  //else
    res.render('index');
});

router.get('/fotos', function(req, res, next) {
    res.render('fotos');
});

router.get('/boletines', function(req, res, next) {
  res.render('boletines', {});
});

router.get('/boletin2000', function(req, res, next) {
  res.render('boletin2000', {});
});

router.get('/boletin2001', function(req, res, next) {
  res.render('boletin2001', {});
});

router.get('/boletin2002', function(req, res, next) {
  res.render('boletin2002', {});
});

router.get('/boletin2003', function(req, res, next) {
  res.render('boletin2003', {});
});

router.get('/boletin2004', function(req, res, next) {
  res.render('boletin2004', {});
});

router.get('/revistas2016', function(req, res, next) {
  res.render('revistas2016', {});
});

router.get('/revistas2019', function(req, res, next) {
  res.render('revistas2019', {});
});

router.get('/revistas2018', function(req, res, next) {
  res.render('revistas2018', {});
});

router.get('/revistas2017', function(req, res, next) {
  res.render('revistas2017', {});
});

router.get('/tripticos', function(req, res, next) {
  res.render('tripticos', {});
});

router.get('/videos', function(req, res, next) {
  res.render('videos', {});
});

router.get('/memes', function(req, res, next) {
  res.render('memes', {});
});

router.get('/servicioSocial', function(req, res, next) {
  res.render('servSocial', {});
});

router.get('/somos', function(req, res, next) {
  res.render('somos', {});
});

router.get('/errorlog', function(req, res, next) {
  res.render('errorlog', {});
});


//para ver cookies
router.get('/qwerty', function (req, res, next) {
  // Cookies normales
  console.log('Cookies: ', req.cookies);
  // signed Cookies
  console.log('Signed Cookies: ', req.signedCookies);

  data = req.cookies.mail.userName;
  console.log("datos ", data);
});


module.exports = router;

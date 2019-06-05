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

router.get('/boletin2005', function(req, res, next) {
  res.render('boletin2005', {});
});

router.get('/boletin2006', function(req, res, next) {
  res.render('boletin2006', {});
});

router.get('/boletin2007', function(req, res, next) {
  res.render('boletin2007', {});
});

router.get('/boletin2008', function(req, res, next) {
  res.render('boletin2008', {});
});

router.get('/boletin2009', function(req, res, next) {
  res.render('boletin2009', {});
});

router.get('/boletin2010', function(req, res, next) {
  res.render('boletin2010', {});
});

router.get('/boletin2011', function(req, res, next) {
  res.render('boletin2011', {});
});

router.get('/boletin2012', function(req, res, next) {
  res.render('boletin2012', {});
});

router.get('/boletin2013', function(req, res, next) {
  res.render('boletin2013', {});
});

router.get('/boletin2014', function(req, res, next) {
  res.render('boletin2014', {});
});

router.get('/boletin2015', function(req, res, next) {
  res.render('boletin2015', {});
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

router.get('/Abril2016', function(req, res, next) {
  res.render('Abril2016', {});
});


router.get('/Junio2016', function(req, res, next) {
  res.render('Junio2016', {});
});

router.get('/Julio2016', function(req, res, next) {
  res.render('Julio2016', {});
});

router.get('/Agostos2016', function(req, res, next) {
  res.render('Agosto2016', {});
});

router.get('/Septiembre2016', function(req, res, next) {
  res.render('Septiembre2016', {});
});

router.get('/Octubre2016', function(req, res, next) {
  res.render('Octubre2016', {});
});

router.get('/Noviembre2016', function(req, res, next) {
  res.render('Novimbre2016', {});
});

router.get('/Diciembre2016', function(req, res, next) {
  res.render('Diciembre2016', {});
});

router.get('/pruebasam', function(req, res, next) {
  res.render('pruebasam', {});
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

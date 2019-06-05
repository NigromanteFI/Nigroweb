var express = require('express');
var file = require('fs');
var router = express.Router();
var mongoose = require('mongoose');

//var data={};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




router.post('/error', function(req, res, next) {
  res.json(req.cookies.fail);
});

router.post('/logout',function(req,res,next){
  res.clearCookie("fail");
  res.clearCookie("user");
  res.redirect('/');
});



router.post("/login", function(req, res){
//router.post("/bdtest", function(req, res){
  var user=new User ({user: req.body.user, password: req.body.password});

  user.save(function(){
    res.send ("recibimos tus datos")

  });
});



router.post('/Saldos', function(req, res, next) {
  var responseJSON={firstName :'Alan ',lastName :"brito" };
  res.json(responseJSON);
});







module.exports = router;

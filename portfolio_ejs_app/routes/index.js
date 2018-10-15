var express = require('express');
var router = express.Router();

var nav = [
  { link:'/', title:'Home'},
  { link:'/resume',title:'Resume'}
]
/* GET home page. */
router.get('/',function (req, res, next) {
    res.render('index', { 
      title: 'Sample Portfolio',
      nav,
    });
  });

module.exports = router;

var express = require('express');
var router = express.Router();

var nav = [
  { link:'/', title:'Home'},
  { link:'/resume',title:'Resume'}
]
/* GET resume page using ejs template engine. */
router.get('/', function(req, res, next) {
  res.render('resume',{
    title:"My Resume",
    nav,
  })
});

module.exports = router;

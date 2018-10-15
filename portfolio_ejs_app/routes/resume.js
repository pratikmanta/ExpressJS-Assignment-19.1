var express = require('express');
var router = express.Router();

var nav = [
  { link:'/', title:'Home'},
  { link:'/resume',title:'Resume'}
]
/* GET resume page . */
router.get('/', function(req, res, next) {
  res.render('resume',{
    title:"My Resume",
    nav,
  })
});

module.exports = router;

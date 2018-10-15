var express = require('express');
var router = express.Router();
var { MongoClient, ObjectID } = require('mongodb')

const url = "mongodb://localhost:27017"
const dbName = 'account';

/* GET Sign Up page  */
router.get('/', (req, res) => {
  res.render('index', { title: 'SignUp Page', message: '' });
});

// post User details for signup
router.post('/', (req, res) => {
  (async function mongo() {
    var client;
    try {
      var obj = JSON.stringify(req.body)
      var userObj = JSON.parse(obj)
      client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const col = await db.collection('users')
      if (!userObj.username || !userObj.password) {
        res.status('400')
        res.render('index', { title: "SignUp Page", message: "Please Fill complete details" })  
      }
      else {
        col.insertOne(userObj ,function (err, res) {
          if (err) throw err
           console.log('1 doc inserted')
        }); 
      res.redirect('/login')
      }
    }
    catch (err) {
      console.log("error connecting to db")
    }

  })()

});



module.exports = router;

var express = require('express');
var router = express.Router();
var session = require('express-session')
var { MongoClient, ObjectID } = require('mongodb')

const url = "mongodb://localhost:27017";
const dbName = "account";

// get Login page 
router.get('/', (req, res) => {
  res.render('login', { title: 'Login Page', message:''});
});
  
// post user details for login
router.post('/',(req,res) => {
  (async function mongo() {
    var client;
    var obj = JSON.stringify(req.body);
    var userObj = JSON.parse(obj)
    try {
      client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const col = await db.collection('users')
      if (!userObj.username || !userObj.password) {
        res.status('400')
        return res.render('login', { title: "Login Page", message: "Please Fill complete details" })  
      }
      var user = col.findOne({username:userObj.username, password:userObj.password}, (err, user) => {
        if (user === null) {
          return res.render('login', { title: "Login Page", message: "Enter valid details" })
        }
        if (user.username === userObj.username && user.password === userObj.password) {
          req.session.user = user
          res.redirect('/users')
        }
      })
    }
    catch(err) {
      console.log("error connecting to db")
    }
  })()
})
  
module.exports = router;


var express = require('express');
var router = express.Router();
var { MongoClient, ObjectID } = require('mongodb')
const url = "mongodb://localhost:27017";
const dbName = "account";

// redirect to logged in user details
router.get('/',(req, res) => {
    (async function mongo() { 
        try {
            const client = await MongoClient.connect(url);
            const db = client.db(dbName)
            const col = db.collection('users')
            if(req.session && req.session.user){
                col.findOne({username:req.session.user.username}, (err,user)=>{
                    if(!user){
                        req.session.reset();
                        res.redirect('/login')
                    }
                    else {
                    res.locals.user = user
                    res.render('login_details',{title:"User-Profile", user}) 
                    }
                })
                client.close;
            }
            else {
                res.redirect('/login')
            }
        }
        catch(err) {
            console.log("error")
        }
    })()
  });

  
module.exports = router;

const fs = require('fs');
const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const multer = require('multer');
const upload = multer();

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/goldSilverInvesting');
var userSchema = mongoose.Schema({
    email : String,
    password : String
});

var UserData = mongoose.model('users',userSchema);



const tag = "[server]";

app.post('/api/join', upload.single(), (req,res) => {
    var email = req.body.email;
    var password = req.body.password;

    UserData.find({'email' : email},(err, docs) => {
        if(err) console.log('find' + err);
        else if(docs.length > 0) res.status(500).send('사용중인 email입니다.')
        else {
            var userData = new UserData({'email' : email, 'password' : password});
            userData.save(function(err, silence){
                if(err){
                    console.log(err);
                    res.status(500).send('update error');
                    return;
                    }
                    res.status(200).send("Inserted", email);
            })
        }
    })
})

app.post('/api/login', upload.single(), (req,res) => {
    var email = req.body.email;
    var password = req.body.password;

    UserData.find({'email' : email, 'password' : password},(err, docs) => {
        if(err) console.log('find' + err);
        else if(docs.length < 1) res.status(500).send('일차하는 정보가 없습니다')
        else {
            res.status(200).send(email);
        }
    })
})

app.post('/api/data', upload.single(), (req,res) => {
    var email = req.body.email;

    UserData.find({'email' : email},(err, docs) => {
        if(err) console.log('find' + err);
        else if(docs.length < 1) res.status(500).send('일차하는 정보가 없습니다')
        else {
            res.status(200).send(docs);
        }
    })
})

app.get('/api/public/:id',(req,res) => {
    res.status(200).sendFile(__dirname + '/public/' + req.params.id + '.jpg');
})

app.listen(port, () => {
    console.log(tag, `Listening port ${port}`);
})


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
const multer = require('multer');
const upload = multer({dest : './upload'});
const tag = "[server]";


app.get('/api/join', (req,res) => {
    console.log(tag,"join-get");
    res.send('join')
})

app.get('/api/login', (req,res) => {
    console.log(tag,"login-get");

    res.send('login이다');
})

app.post('/api/join', upload.single(), (req,res) => {
    console.log(tag,"join-post", req.body);
    res.send('join')
})

app.post('/api/login', upload.single(), (req,res) => {
    console.log(tag,"login-post", req.body);

    res.send('login이다');
})

app.listen(port, () => {
    console.log(tag, `Listening port ${port}`);
})


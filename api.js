const actions = require('./actions');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

app.use(bodyParser.raw({ type: "*/*", limit: '50mb' }))
app.use(express.static('images'))


var uri = "mongodb+srv://aisha:1111@cluster0-cbiyv.mongodb.net/test?retryWrites=true";

var connect = MongoClient.connect(uri,(err,client)=>{

    app.get('/test', (req, res) => {
        var myObj1 = {name: "Tennis ball", blurb: "great for dogs", price: "1.25" }
        var myObj2 = {name: "Flower", blurb: "beautiful flower", price: "3.25" }
        var myObj3 = {name: "vase", blurb: "great for flowers", price: "5.25" }
        client.db("PetHub").collection("listings").insertOne(myObj1)
        client.db("PetHub").collection("listings").insertOne(myObj2)
        client.db("PetHub").collection("listings").insertOne(myObj3)
        res.send(("asd"));
    })
    
})

app.listen(4000, () => console.log('Listening on port 4000!'))
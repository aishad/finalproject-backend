const express = require('express')
const app = express()
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

var uri = "mongodb+srv://aisha:1111@cluster0-cbiyv.mongodb.net/test?retryWrites=true";


app.post('/createListing', (req, res) => {
    reqb = JSON.parse(req.body.toString())
    // reqb = {
    //   artistName: "aisha",
    //   name: 'print',
    //   price: 100,
    //   cat: "Prints",
    //   blurb: "cool print",
    //   quantity: 1,
    //   imageURL1: '/items/aisha.jpg',
    //   imageURL2: '/items/pillow.jpg',
    //   imageURL3: '',
    // }

    // SOME FUNCTIONS
    // insert data into listings

    app.post('/createListing', (req, res) => {
        // let body = JSON.parse(req.body.toString());
        // body = {
        //     artistName: "aisha",
        //     name: 'print',
        //     price: 100,
        //     cat: "Prints",
        //     blurb: "cool print",
        //     quantity: 1,
        //     imageURL1: '/items/aisha.jpg',
        //     imageURL2: '/items/pillow.jpg',
        //     imageURL3: '/items/embroidery.jpg',
        // }

        let resB = {itemID: "123"};
        res.send(JSON.stringify(resB))
    })
    
})


app.listen(3000, () => console.log('Listening on port 3000!'))

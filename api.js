const express = require('express')
const app = express()
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

var uri = "mongodb+srv://aisha:1111@cluster0-cbiyv.mongodb.net/test?retryWrites=true";

    // SOME FUNCTIONS
    // insert data into listings

    app.post('/createListing', (req, res) => {
        let reqb = JSON.parse(req.reqb.toString());
        // reqb = {
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

        let RESB = {itemID: "123"};
        res.send(JSON.stringify(RESB))
    })
    
    app.get('/getartistdetails', (req,res) =>{
        //let reqb = JSON.parse(req.body.toString());
        reqb = {artistName : "caro"}

        RESB = {
            artistName: "caro",
            bio: "I'm a cool artist",
            location: "Montreal, Canada",
            imageURL: "mypic.jpg",
            items: [
              {
                itemID: "123457",
                name: "Awesome Embroidery",
                price: 100,
                artistName: "caro",
                imageURL: "embroidery.jpg",
                cat: "Spring",
                blurb: "Best embroidery ever!",
                quantity: 1
              },
              {
                itemID: "123458",
                name: "Pillow",
                price: 100,
                artistName: "caro",
                imageURL: "pillow.jpg",
                cat: "Popular",
                blurb: "Best pillow ever!",
                quantity: 2
              }
            ]         
        }
        res.send(JSON.stringify(RESB))
    })

    app.get()


app.listen(3000, () => console.log('Listening on port 3000!'))

var MongoClient=require("mongodb").MongoClient;
var express=require("express");
var cors=require("cors")
var mongodbcon="mongodb://127.0.0.1:27017"
var app=express() 
app.use(cors()) 
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
app.get('/users',(request,response)=>{
MongoClient.connect(mongodbcon).then((obj)=>{
    var database=obj.db("Shopper")
    database.collection("user").find({}).toArray().then((alldata)=>{
        response.send(alldata)
        response.end()
    })
})
})
app.post("/videoup",(req,res)=>{
    var userdata={
        "userid":parseInt(req.body.userid),
        "username":req.body.username,
        "mobile":req.body.mobile,
        "email":req.body.email,
        "password":req.body.password,
     } 
     MongoClient.connect(mongodbcon).then((obj)=>{
        var database=obj.db("Shopper")
        database.collection("user").insertOne(userdata).then(()=>{
        console.log("record inserted")
        res.end()
        })
     })
})
app.listen(1000)
console.log("database connected in to http://127.0.0.1:1000")  
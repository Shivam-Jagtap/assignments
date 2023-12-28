// this file is generated only to check if mongodb is connected and is working or not properly
// const express = require('express')
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser');

// const app = express()

// mongoose.connect('mongodb+srv://hkirats_cohort:6O0kPbJA4gihV4EJ@cluster0.aau4iwh.mongodb.net/').then(()=>{console.log("connected with the database")});

// const testSchema = new mongoose.Schema({
//     name : String,
//     rollno : Number,
//     isPresent : Boolean
// })

// const test = mongoose.model('test',testSchema);

// app.get("/",(req,res)=>{
//     const name = req.headers['name'];
//     const no = req.headers.no;
//     // console.log(req.headers)
//     // console.log(name);
//     // console.log(no);

//     async function putData(){
//         try {
//             await test.create({
//                 name : name,
//                 rollno : no,
//                 isPresent : true
//             })
//             res.json({msg : "data added to database..."})
//         } catch (error) {
//             res.send(error);
//         }
//     }
//     putData();
// })

// app.get("/getData",(req,res)=>{
    
//        test.find().then((d)=>{
//             res.send(d);       
//         }).catch((e)=>{
//             res.send(e);
//        })
   
// })

// const port = 4000;
// app.listen(port,()=>{
//     console.log("app listening on port "+ port)
// })
const mysql = require('mysql');
const express = require('express');

var app= express();
const bodyparser = require('body-parser');
//app.use(express.urlencoded({ extended: true }));

app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// / Add headers
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

var con = mysql.createConnection({
 

host: "88.250.131.163",
 user: "bay66",
 password: "super66",
 database: "Mrts2020",
 //multipleStatements: true

});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");

});

const port = 5006;
app.listen(port, () => console.log(`Server localhost:${port} üzerinde ayakta`) );

// GET USERS ALL


app.get('/kisiler',(req,res)=>{
  console.log('deneme');
    con.query("SELECT name FROM users",  (err, result, fields) => {

        if (!err)
        { // console.log(result[0].pass);
          console.log(result);
           //console.log(result[0].id);
          res.send(result);
         // res.send(result[0].pass);
        
        }
            else
            console.log(err);
    })
});



app.get('/Country',(req,res)=>{

    con.query("SELECT name FROM Country",  (err, result, fields) => {

        if (!err)
        { // console.log(result[0].pass);
          console.log(result);
           //console.log(result[0].id);
          res.send(result);
         // res.send(result[0].pass);
        
        }
            else
            console.log(err);
    })
});




// GET SPESİFİC USER


app.get('/kisiler/:isim',(req,res)=>{
   console.log([req.params.isim]);
   con.query("SELECT * FROM users WHERE name = ?", [req.params.isim], (err, result, fields) => {

        if (!err){
          console.log('Deneme: ');
           console.log(result);
           //console.log(result[0].id);
          res.send(result);
        }
            else
            console.log(err);
    })
});

// DELETE USER


app.delete('/kisiler/sil/:isim',(req,res)=>{
  con.query("DELETE FROM users WHERE name = ?", [req.params.isim], (err, result, fields) => {

    if (!err)
      // console.log(result);
       //console.log(result[0].id);
      res.send('DELTED');

        else
        console.log(err);
})
});



// ADD USER


 app.post('/ekle', (req,res)=>{
  
 
  
   //console.log(result[0].id);
  //console.log(req.body.length);
   con.query("SELECT * FROM users",  (err, result, fields) => {

    if (!err)
  //   { // console.log(result[0].pass);
  //      console.log(result[0].id);
   
     res.send(req.body[1].pass);
    // console.log('yok');
    
        else
        console.log(err);
        
 })

 // let veri = req.body;
  console.log('Veri: ');
 


});



  // var sql = "INSERT INTO users (name, pass) VALUES ?";
  // var values = [
  //   ['Baybars', 'Marduk66'],
  //   ['Suela', 'Ani0212'],
  //   ['Cihan', 'Chaina652'],
  //   ['Yaser', 'Morocco21'],
  //   ['Ozgur', 'Russan69']
    
  // ];
  // con.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records inserted: " + result.affectedRows);
  // });




   //console.log=(veri);
 // res.send(veri);
//   con.query("INSERT FROM users WHERE name = ?", [req.params.isim], (err, result, fields) => {

//       console.log(result);
//        console.log(result[0].id);
    

       // })

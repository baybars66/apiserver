const express = require('express');
const mysql = require('mysql');




var app= express();
const bodyparser = require('body-parser');
//app.use(express.urlencoded({ extended: true }));

app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

//4. ve 5. dersler
const path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public'))); //Haritalama yada eşleştirme klasörü açmış olduk.
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/login', function(req, res){
  res.sendFile(path.join(__dirname, 'login.html'));
});



var con = mysql.createConnection({
 

host: "88.250.131.163",
 user: "bay66",
 password: "super66",
 database: "Mrts2020",


});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");

});

const port = 5006;
app.listen(port, () => console.log(`Server localhost:${port} üzerinde ayakta`) );

// GET USERS ALL

app.get('/kisiler',(req,res)=>{
  con.query("SELECT name FROM users",  (err, result, fields) => {
  if (!err)
      res.send(result);
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


//ADD USER

app.post('/Kull/Add/',(req,res)=>{
  const user = req.body;
  const dd = "INSERT INTO users (name, pass) VALUES ('" + user.name + "', '" + user.pass +"')";
  con.query(dd, (err, result, fields) => {
  if (!err)
   res.send('USER INSERTED');
  else
   console.log(err);
   })
});


// DELETE USER

app.delete('/kisiler/sil/:id',(req,res)=>{
  con.query("DELETE FROM users WHERE name = ?", [req.params.id], (err, result, fields) => {
  if (!err)
    res.send('USER DELETED');
  else
    console.log(err);
  })
});


// GET DESCRIPTION ALL

app.get('/Desc',(req,res)=>{
  con.query("SELECT name FROM Description",  (err, result, fields) => {
   if (!err)
    res.send(result);
    else
    console.log(err);
  })
});


// ADD DESCRIPTION

app.post('/Desc/Add/:name',(req,res)=>{
  const bb = "INSERT INTO Description (name) VALUES ('" + [req.params.name] +"')";
  con.query(bb, (err, result, fields) => {
  //con.query("INSERT INTO Description (name) VALUES ('dede')", (err, result, fields) => {
  if (!err)
    res.send('DESCRIPTION INSERTED');
  else
    console.log(err);
   })
});


// DELETE DESCRIPTION

app.delete('/Desc/sil/:name',(req,res)=>{
  con.query("DELETE FROM Description WHERE name = ?", [req.params.name],(err, result, fields) => {
  if (!err)
    res.send('DESCRIPTION DELETED');
  else
    console.log(err);
})
});


// GET CATEGORIES ALL
 
app.get('/Cat',(req,res)=>{
  con.query("SELECT name FROM Category",  (err, result, fields) => {
  if (!err)
    res.send(result);
  else
    console.log(err);
  })
});


// ADD CATEGORY

app.post('/Cat/Add/:name',(req,res)=>{
  const cc = "INSERT INTO Category (name) VALUES ('" + [req.params.name] +"')";
  con.query(cc, (err, result, fields) => {
  //con.query("INSERT INTO Description (name) VALUES ('dede')", (err, result, fields) => {
  if (!err)
    res.send('CATEGORY INSERTED');
  else
    console.log(err);
   })
});


// DELETE CATEGORY

app.delete('/Cat/sil/:name',(req,res)=>{
 
  con.query("DELETE FROM Category WHERE name = ?", [req.params.name],(err, result, fields) => {
  if (!err)
    res.send('CATEGORY DELETED');
  else
    console.log(err);
})
});



// GET COUNTRIES ALL

app.get('/Country',(req,res)=>{
  con.query("SELECT name FROM Country",  (err, result, fields) => {
  if (!err)
    res.send(result);
    else
     console.log(err);
    })
});




// ADD COUNTRY

app.post('/Country/Add/:name',(req,res)=>{
  const cc = "INSERT INTO Country (name) VALUES ('" + [req.params.name] +"')";
  con.query(cc, (err, result, fields) => {
  //con.query("INSERT INTO Description (name) VALUES ('dede')", (err, result, fields) => {
  if (!err)
    res.send('COUNTRY INSERTED');
  else
    console.log(err);
   })
});


// DELETE COUNTRY

app.delete('/Country/sil/:name',(req,res)=>{
  
  con.query("DELETE FROM Country WHERE name = ?", [req.params.name],(err, result, fields) => {
  if (!err)
    res.send('COUNTRY DELETED');
  else
    console.log(err);
})
});


//GET DATA

//await axios.get('http://localhost:5006/Data/:' + e.target.value);

app.post('/GetData/',(req,res)=>{
  
  const ulke = req.body.ulke;
  const estimated= req.body.estimate;
  //console.log(ulke, estimated);

 const sql = "SELECT * FROM " + ulke +" WHERE Estimated = "+ "'"+estimated+"'";
//console.log(sql);
 //const sql ='SELECT * FROM Balkan WHERE Estimated = "YES"' ;


  con.query(sql, (err, result, fields) => {

       if (!err){
         //console.log('Deneme: ');
         // console.log(result);
          //console.log(result[0].id);
         res.send(result);
       }
           else
           console.log(err);
   })
 });

//ADD DATA

app.post('/AddData/',(req,res)=>{
  const all = req.body;
  const ulke = all.ulke;
  const amount = all.adet*all.fiyat;

  console.log(all);
  const sql = "INSERT INTO " + ulke + " (User, Depart, Donus, Descrip, Category, Quantity, Price, Estimated, Amount) VALUES ('" + all.kullanici + "', '" + all.gidis + "', '" +all.donus + "', '" + all.icerik + "', '" + all.kategory + "', '" + all.adet + "', '" + all.fiyat + "', '" + all.tahmini + "', '" + amount + "')";

//const sql = "INSERT INTO " + ulke + " (User, Donus) VALUES ('" + all.kullanici + "', '" + all.donus +  "')";


console.log(sql);
console.log(amount);



  //   const dd = "INSERT INTO users (name, pass) VALUES ('" + user.name + "', '" + user.pass +"')";


  con.query(sql, (err, result, fields) => {
  if (!err)
   res.send('DATA INSERTED');
  else
   console.log(err);

   })
});

//DELETE DATA



app.post('/Data/sil/', (req,res)=>{

  console.log(req.body);
  const ulke = req.body.ulke;
  const id = req.body.id;
  
const sql = "DELETE FROM " + ulke + " WHERE id =" + "'" + id+ "'";
console.log(sql);


  con.query(sql, (err, result, fields) => {
  if (!err)
    res.send('DATA DELETED');
  else
    console.log(err);
})
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


// Önemli bir örnek
  //GET DATA

//await axios.get('http://localhost:5006/Data/:' + e.target.value);

// app.get('/GetData/',(req,res)=>{
//   const veri =[req.params.country];
//   const sql = "SELECT * FROM " + veri;
//   console.log(sql);

//   con.query(sql, (err, result, fields) => {

//        if (!err){
//          console.log('Deneme: ');
//           console.log(result);
//           //console.log(result[0].id);
//          res.send(result);
//        }
//            else
//            console.log(err);
//    })
// });
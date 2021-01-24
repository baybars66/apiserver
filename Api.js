const express = require('express');
const mysql = require('mysql');
const router = require('./Routers/Route')
const DescCont = require ('./Controls/DescCon')
const KisiCont = require ('./Controls/KisiCont')
const CatCont = require ('./Controls/CatCont')
const CountCont = require ('./Controls/CountCont')
const DataCont = require ('./Controls/DataCont')
const SumCont = require ('./Controls/SumCont')

var app= express();

const bodyparser = require('body-parser');

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

app.use('/', router);
//app.use('/safe', yonlendirici);


// var con = mysql.createConnection({
 

//  //host: "192.168.1.33",
//  //host: "localhost",
//  host: "88.250.131.163",
//  user: "bay66",
//  password: "super66",
//  database: "Mrts2020",


// });



function Connect() {
  var con = mysql.createConnection({
    host: "88.250.131.163",
    user: "bay66",
    password: "super66",
    database: "Mrts2020",
  });

  con.connect(function(err) {
      if (err) {
           console.log(err);
          console.log('Error connecting to Database');
          setInterval(Connect, 10066);
          con.end();
          }else
          {
          console.log('Connected to Database');
      }

  });
}

Connect();


const port = 10066;
app.listen(port, () => console.log(`Server localhost:${port} üzerinde ayakta`) );

// GET USERS ALL

app.get('/kisiler', KisiCont.Kisiler);
app.get('/kisiler/:isim',KisiCont.GetOne);
app.post('/Kull/Add',KisiCont.KisilerADD);
app.delete('/kisiler/sil/:id',KisiCont.KisilerDEL);


// GET DESCRIPTION ALL
//app.get('/Desc', router);
app.get('/Desc', DescCont.DescALL);
app.post('/Desc/Add/:name', DescCont.DescADD);
app.delete('/Desc/sil/:name', DescCont.DescDEL);


// GET CATEGORIES ALL
app.get('/Cat', CatCont.CatALL);
app.post('/Cat/Add/:name', CatCont.CatADD);
app.delete('/Cat/sil/:name', CatCont.CatDEL);



// GET COUNTRIES ALL

app.get('/Country',CountCont.CountALL);
app.post('/Country/Add/:name',CountCont.CountADD);
app.delete('/Country/sil/:name', CountCont.CountDEL);


//GET DATA
app.post('/GetData/', DataCont.DataALL);
app.post('/AddData/', DataCont.DataADD);
app.post('/Data/sil/', DataCont.DataDEL);

//**************************************    SUMMARY



app.post('/SUM1/', SumCont.SUM1);















 /*
  //const estimated = req.body.est;
//console.log(ulke);

const sql= "SELECT SUM(Amount) AS 'EstSum' FROM  "+ ulke +" WHERE Estimated = 'YES'";

//SELECT SUM(Amount) FROM Balkan WHERE Estimated = 'YES' AND Category= 'Lodging'
//const sql= 'SELECT SUM(Amount) FROM ' + ulke +" WHERE Estimated = "+ "'"+estimated+"'";

 //const sql = "SELECT * FROM " + ulke +" WHERE Estimated = "+ "'"+estimated+"'";

 //const sql ='SELECT * FROM Balkan WHERE Estimated = "YES"' ;

 console.log(sql);

  con.query(sql, (err, result, fields) => {

       if (!err){
         //
          console.log(result);

          var string=JSON.stringify(result);
          console.log('>> string: ', string );
          var json =  JSON.parse(string);
          console.log('>> json: ', json);
          console.log('>> user.name: ', json[0].EstSum);
         // req.list = json;

       }
           else
           console.log(err);
   })



   
 });



 */
 app.post('/SUM2/',(req,res)=>{
  
  const ulke = req.body.name;
  //const estimated = req.body.est;
//console.log(ulke);
const sql= 'SELECT SUM(Amount) FROM ' + ulke +" WHERE Estimated = 'NO'";
//const sql= 'SELECT SUM(Amount) FROM ' + ulke +" WHERE Estimated = "+ "'"+estimated+"'";

 //const sql = "SELECT * FROM " + ulke +" WHERE Estimated = "+ "'"+estimated+"'";
console.log(sql);
 //const sql ='SELECT * FROM Balkan WHERE Estimated = "YES"' ;


  con.query(sql, (err, result, fields) => {

       if (!err){
         //
 
         res.send(result);
       }
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
const express = require('express');
const mysql = require('mysql');
const router = require('./Routers/Route')


const Basla = require ('./Controls/Basla')

const DescCont = require ('./Controls/DescCon')
const KisiCont = require ('./Controls/KisiCont')
const CatCont = require ('./Controls/CatCont')
const CountCont = require ('./Controls/CountCont')

const DataCont = require ('./Controls/DataCont')
const SumCont = require ('./Controls/SumCont')


const SumDetail = require ('./Controls/SumDetail')
//const Quarter = require ('./Controls/YEDEK/Quarter')

const Quar = require ('./Controls/Quar')


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


var con = mysql.createConnection({
 

 //host: "192.168.1.33",
 //host: "localhost",
 host: "88.250.131.163",
 user: "bay66",
 password: "super66",
 database: "Mrts2020",


});



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



////************************************************************************ */
// BASLA

app.get('/Basla', Basla.Basla);



// GET USERS ALL

app.get('/kisiler', KisiCont.Kisiler);
app.get('/kisiler/:isim',KisiCont.GetOne);
app.post('/Kull/Add/',KisiCont.KisilerADD);
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



app.post('/SUM/',SumCont.SUM);
app.post('/DetailSum/',SumDetail.SUMDETAIL);



/**********************************QUARTERS */

// app.get('/Q1',Quarter.Qua1);
// app.get('/Q2',Quarter.Qua2);
// app.get('/Q3',Quarter.Qua3);
// app.get('/Q4',Quarter.Qua4);

app.post('/QT/',Quar.QTOTAL);
app.post('/QL/',Quar.Qua1);
app.post('/QDETLIST/',Quar.QDETLIST);



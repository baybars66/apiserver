
const express = require('express');
//const blu = require("bluebird");
const mysql = require('mysql');
var Promise = require("bluebird");


// Promise.promisifyAll(require("mysql/lib/Connection").prototype);
// Promise.promisifyAll(require("mysql/lib/Pool").prototype);
// var app= express(); 

const con = mysql.createConnection({
    //host: "192.168.1.33",
    //host: "localhost",
    host: "88.250.131.163",
    user: "bay66",
    password: "super66",
    database: "Mrts2020",
});

const db  = Promise.promisifyAll(con);

module.exports.Qua1 =  async (req,res)=>{

  var Gidecek={
    Q1RealTotal : "",
    Q1EstTotal : "",

   
}
  var Q1ESTSUM = "SELECT  Sum(Amount) AS 'Q1ESTSUM' FROM Tum WHERE Estimated = 'YES' AND CAST(Depart AS DATE) > '2020-01-01' AND CAST(Depart AS DATE) < '2020-03-30'"
  var Q1REALSUM = "SELECT  Sum(Amount) AS 'Q1REALSUM' FROM Tum WHERE Estimated = 'NO' AND CAST(Depart AS DATE) > '2020-01-01' AND CAST(Depart AS DATE) < '2020-03-30'"

  await db.queryAsync(Q1ESTSUM).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1EstTotal=rows[0].Q1ESTSUM;

  });

  await db.queryAsync(Q1REALSUM).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1RealTotal=rows[0].Q1REALSUM;

   });

res.send(Gidecek);
res.end();

}




module.exports.Qua2 =  async (req,res)=>{

  var Q2ESTSUM = "SELECT  Sum(Amount) AS 'Q2ESTSUM' FROM Tum WHERE Estimated = 'YES' AND CAST(Depart AS DATE) > '2020-04-01' AND CAST(Depart AS DATE) < '2020-06-30'"
  var Q2REALSUM = "SELECT  Sum(Amount) AS 'Q2REALSUM' FROM Tum WHERE Estimated = 'NO' AND CAST(Depart AS DATE) > '2020-04-01' AND CAST(Depart AS DATE) < '2020-06-30'"

  await db.queryAsync(Q2ESTSUM).then(function(rows){
      //  Food= rows[0].Food;
    console.log(rows);

  });

  await db.queryAsync(Q2REALSUM).then(function(rows){
    //  Food= rows[0].Food;
  console.log(rows);

  });

}


module.exports.Qua3 =  async (req,res)=>{
 
  var Q3ESTSUM = "SELECT  Sum(Amount) AS 'Q3ESTTSUM' FROM Tum WHERE Estimated = 'YES' AND CAST(Depart AS DATE) > '2020-07-01' AND CAST(Depart AS DATE) < '2020-09-30'"
  var Q3REALSUM = "SELECT  Sum(Amount) AS 'Q3REALSUM' FROM Tum WHERE Estimated = 'NO' AND CAST(Depart AS DATE) > '2020-07-01' AND CAST(Depart AS DATE) < '2020-09-30'"
  
  await db.queryAsync(Q3ESTSUM).then(function(rows){
     //  Food= rows[0].Food;
    console.log(rows);
  });

  await db.queryAsync(Q3REALSUM).then(function(rows){
     //  Food= rows[0].Food;
      console.log(rows);
  });

 }


module.exports.Qua4 =  async (req,res)=>{

  var Q4ESTSUM = "SELECT  Sum(Amount) AS 'Q4ESTSUM' FROM Tum WHERE Estimated = 'YES' AND CAST(Depart AS DATE) > '2020-10-01' AND CAST(Depart AS DATE) < '2020-12-31'"
  var Q4REALSUM = "SELECT  Sum(Amount) AS 'Q4REALSUM' FROM Tum WHERE Estimated = 'NO' AND CAST(Depart AS DATE) > '2020-10-01' AND CAST(Depart AS DATE) < '2020-12-31'"
    
  await db.queryAsync(Q4ESTSUM).then(function(rows){
     //  Food= rows[0].Food;
     console.log(rows);

  });
 
  await db.queryAsync(Q4REALSUM).then(function(rows){
     //  Food= rows[0].Food;
      console.log(rows);

  });

}







  //  await db.queryAsync(q2).then(function(rows){
  //   Lodging=rows[0].Lodging;
  //   //console.log(rows[0].name);
 
  //   });

  //   await db.queryAsync(q3).then(function(rows){
  //     Trans=rows[0].Trans;
  //     //console.log(rows[0].name);
   
  //   });

  //   await db.queryAsync(q4).then(function(rows){
  //     Other=rows[0].Other;
  //     //console.log(rows[0].name);
   
  //   });



//   SumDetail.SumFood=Food;
//   SumDetail.SumLodging=Lodging;
//   SumDetail.SumTrans=Trans;
//   SumDetail.SumOther=Other;

// console.log(SumDetail);

// res.send(SumDetail);
// res.end();




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
    Q1Food:"",
    Q1Trans: "",
    Q1Lodging: "",
    Q1Other: "",

   
}
  var Q1ESTSUM = "SELECT  Sum(Amount) AS 'Q1ESTSUM' FROM Tum WHERE Estimated = 'YES' AND CAST(Depart AS DATE) > '2020-01-01' AND CAST(Depart AS DATE) < '2020-03-30'"
  var Q1REALSUM = "SELECT  Sum(Amount) AS 'Q1REALSUM' FROM Tum WHERE Estimated = 'NO' AND CAST(Depart AS DATE) > '2020-01-01' AND CAST(Depart AS DATE) < '2020-03-30'"
  var Q1OTHER = "SELECT SUM(Amount) AS 'Other' FROM Tum Where  Estimated = 'NO' AND Category = 'Other' AND CAST(Depart AS DATE) > '2020-01-01' AND CAST(Depart AS DATE) < '2020-03-30'";
  var Q1FOOD = "SELECT SUM(Amount) AS 'Food' FROM Tum Where  Estimated = 'NO' AND Category = 'Food' AND CAST(Depart AS DATE) > '2020-01-01' AND CAST(Depart AS DATE) < '2020-03-30'";
  var Q1TRANS = "SELECT SUM(Amount) AS 'Trans' FROM Tum Where  Estimated = 'NO' AND Category = 'Transportation' AND CAST(Depart AS DATE) > '2020-01-01' AND CAST(Depart AS DATE) < '2020-03-30'";
  var Q1LODGING = "SELECT SUM(Amount) AS 'Lodging' FROM Tum Where  Estimated = 'NO' AND Category = 'Lodging' AND CAST(Depart AS DATE) > '2020-01-01' AND CAST(Depart AS DATE) < '2020-03-30'";
  



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

   await db.queryAsync(Q1FOOD).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Food=rows[0].Food;

   });

   await db.queryAsync(Q1TRANS).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Trans=rows[0].Trans;

   });
   await db.queryAsync(Q1LODGING).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Lodging=rows[0].Lodging;

   });

   await db.queryAsync(Q1OTHER).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Other=rows[0].Other;

   });




res.send(Gidecek);
res.end();

}




module.exports.Qua2 =  async (req,res)=>{

  //var Q2ESTSUM = "SELECT  Sum(Amount) AS 'Q2ESTSUM' FROM Tum WHERE Estimated = 'YES' AND CAST(Depart AS DATE) > '2020-04-01' AND CAST(Depart AS DATE) < '2020-06-30'"
  //var Q2REALSUM = "SELECT  Sum(Amount) AS 'Q2REALSUM' FROM Tum WHERE Estimated = 'NO' AND CAST(Depart AS DATE) > '2020-04-01' AND CAST(Depart AS DATE) < '2020-06-30'"

  var Gidecek={
    Q1RealTotal : "",
    Q1EstTotal : "",
    Q1Food:"",
    Q1Trans: "",
    Q1Lodging: "",
    Q1Other: "",

   
}
  var Q1ESTSUM = "SELECT  Sum(Amount) AS 'Q1ESTSUM' FROM Tum WHERE Estimated = 'YES' AND CAST(Depart AS DATE) > '2020-04-01' AND CAST(Depart AS DATE) < '2020-06-30'"
  var Q1REALSUM = "SELECT  Sum(Amount) AS 'Q1REALSUM' FROM Tum WHERE Estimated = 'NO' AND CAST(Depart AS DATE) > '2020-04-01' AND CAST(Depart AS DATE) < '2020-06-30'"
  var Q1OTHER = "SELECT SUM(Amount) AS 'Other' FROM Tum Where  Estimated = 'NO' AND Category = 'Other' AND CAST(Depart AS DATE) > '2020-04-01' AND CAST(Depart AS DATE) < '2020-06-30'";
  var Q1FOOD = "SELECT SUM(Amount) AS 'Food' FROM Tum Where  Estimated = 'NO' AND Category = 'Food' AND CAST(Depart AS DATE) > '2020-04-01' AND CAST(Depart AS DATE) < '2020-06-30'";
  var Q1TRANS = "SELECT SUM(Amount) AS 'Trans' FROM Tum Where  Estimated = 'NO' AND Category = 'Transportation' AND CAST(Depart AS DATE) > '2020-04-01' AND CAST(Depart AS DATE) < '2020-06-30'";
  var Q1LODGING = "SELECT SUM(Amount) AS 'Lodging' FROM Tum Where  Estimated = 'NO' AND Category = 'Lodging' AND CAST(Depart AS DATE) > '2020-04-01' AND CAST(Depart AS DATE) < '2020-06-30'";
  



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

   await db.queryAsync(Q1FOOD).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Food=rows[0].Food;

   });

   await db.queryAsync(Q1TRANS).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Trans=rows[0].Trans;

   });
   await db.queryAsync(Q1LODGING).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Lodging=rows[0].Lodging;

   });

   await db.queryAsync(Q1OTHER).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Other=rows[0].Other;

   });




res.send(Gidecek);
res.end();

}


module.exports.Qua3 =  async (req,res)=>{
 
 
  var Gidecek={
    Q1RealTotal : "",
    Q1EstTotal : "",
    Q1Food:"",
    Q1Trans: "",
    Q1Lodging: "",
    Q1Other: "",

   
}
  var Q1ESTSUM = "SELECT  Sum(Amount) AS 'Q1ESTSUM' FROM Tum WHERE Estimated = 'YES' AND CAST(Depart AS DATE) > '2020-07-01' AND CAST(Depart AS DATE) < '2020-09-30'"
  var Q1REALSUM = "SELECT  Sum(Amount) AS 'Q1REALSUM' FROM Tum WHERE Estimated = 'NO' AND CAST(Depart AS DATE) > '2020-07-01' AND CAST(Depart AS DATE) < '2020-09-30'"
  var Q1OTHER = "SELECT SUM(Amount) AS 'Other' FROM Tum Where  Estimated = 'NO' AND Category = 'Other' AND CAST(Depart AS DATE) > '2020-07-01' AND CAST(Depart AS DATE) < '2020-09-30'";
  var Q1FOOD = "SELECT SUM(Amount) AS 'Food' FROM Tum Where  Estimated = 'NO' AND Category = 'Food' AND CAST(Depart AS DATE) > '2020-07-01' AND CAST(Depart AS DATE) < '2020-09-30'";
  var Q1TRANS = "SELECT SUM(Amount) AS 'Trans' FROM Tum Where  Estimated = 'NO' AND Category = 'Transportation' AND CAST(Depart AS DATE) > '2020-07-01' AND CAST(Depart AS DATE) < '2020-09-30'";
  var Q1LODGING = "SELECT SUM(Amount) AS 'Lodging' FROM Tum Where  Estimated = 'NO' AND Category = 'Lodging' AND CAST(Depart AS DATE) > '2020-07-01' AND CAST(Depart AS DATE) < '2020-09-30'";
  



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

   await db.queryAsync(Q1FOOD).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Food=rows[0].Food;

   });

   await db.queryAsync(Q1TRANS).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Trans=rows[0].Trans;

   });
   await db.queryAsync(Q1LODGING).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Lodging=rows[0].Lodging;

   });

   await db.queryAsync(Q1OTHER).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Other=rows[0].Other;

   });




res.send(Gidecek);
res.end();
 }


module.exports.Qua4 =  async (req,res)=>{


  var Gidecek={
    Q1RealTotal : "",
    Q1EstTotal : "",
    Q1Food:"",
    Q1Trans: "",
    Q1Lodging: "",
    Q1Other: "",

   
}
  var Q1ESTSUM = "SELECT  Sum(Amount) AS 'Q1ESTSUM' FROM Tum WHERE Estimated = 'YES' AND CAST(Depart AS DATE) > '2020-10-01' AND CAST(Depart AS DATE) < '2020-12-30'"
  var Q1REALSUM = "SELECT  Sum(Amount) AS 'Q1REALSUM' FROM Tum WHERE Estimated = 'NO' AND CAST(Depart AS DATE) > '2020-10-01' AND CAST(Depart AS DATE) < '2020-12-30'"
  var Q1OTHER = "SELECT SUM(Amount) AS 'Other' FROM Tum Where  Estimated = 'NO' AND Category = 'Other' AND CAST(Depart AS DATE) > '2020-10-01' AND CAST(Depart AS DATE) < '2020-12-30'";
  var Q1FOOD = "SELECT SUM(Amount) AS 'Food' FROM Tum Where  Estimated = 'NO' AND Category = 'Food' AND CAST(Depart AS DATE) > '2020-10-01' AND CAST(Depart AS DATE) < '2020-12-30'";
  var Q1TRANS = "SELECT SUM(Amount) AS 'Trans' FROM Tum Where  Estimated = 'NO' AND Category = 'Transportation' AND CAST(Depart AS DATE) > '2020-10-01' AND CAST(Depart AS DATE) < '2020-12-30'";
  var Q1LODGING = "SELECT SUM(Amount) AS 'Lodging' FROM Tum Where  Estimated = 'NO' AND Category = 'Lodging' AND CAST(Depart AS DATE) > '2020-10-01' AND CAST(Depart AS DATE) < '2020-12-30'";
  



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

   await db.queryAsync(Q1FOOD).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Food=rows[0].Food;

   });

   await db.queryAsync(Q1TRANS).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Trans=rows[0].Trans;

   });
   await db.queryAsync(Q1LODGING).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Lodging=rows[0].Lodging;

   });

   await db.queryAsync(Q1OTHER).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    Gidecek.Q1Other=rows[0].Other;

   });




res.send(Gidecek);
res.end();

}


module.exports.QuaList =  async (req,res)=>{

  console.log("Qualistteyim");
  var QList=[];
  var desc=[];
  const pot=['AND Depart > "2020-01-01" AND Depart < "2020-03-31"',
  'AND Depart > "2020-04-01" AND Depart < "2020-06-31"',
  'AND Depart > "2020-07-01" AND Depart < "2020-09-31"',
  'AND Depart > "2020-10-01" AND Depart < "2020-12-31"',

 
  ]

  const dene = async () =>{
   
   var wh = desc[0];
   
    var baba ='SELECT Descrip, Category, Count(Amount) AS "ADET",Sum(Amount) AS "SUM" From Tum WHERE Descrip= "' + wh +'" AND Estimated = "YES" ' +pot[0];
    await db.queryAsync(baba).then(function(rows){
     //  Food= rows[0].Food;
     //console.log(baba);
     // rows.map( adam =>{
     //   desc.push(adam.Name);
     
     // });
     
    // Gidecek.Q1Lodging=rows[0].Lodging;
    // console.log(rows);
    QList.push(rows[0]);
    console.log(QList);
   });
 }
 





  const descList ="SELECT Name FROM Description";
  await db.queryAsync(descList).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows[0].);
  rows.map( adam =>{
      desc.push(adam.Name);
    
    });
    
   // Gidecek.Q1Lodging=rows[0].Lodging;
 
   });

   dene();
   //console.log(desc);
 
  

}


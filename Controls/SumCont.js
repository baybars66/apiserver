
const express = require('express');

const mysql = require('mysql');
const Promise = require("bluebird");

var app= express(); 
const con = mysql.createConnection({
    //host: "192.168.1.33",
    //host: "localhost",
    host: "88.250.131.163",
    user: "bay66",
    password: "super66",
    database: "Mrts2020",
});


module.exports.Baba = (req, res) =>{
  
    global.db  = Promise.promisifyAll(con);
   db.queryAsync("SELECT * FROM users").then(function(rows){   
        console.log(rows);
       
      // res.send(rows);
    });
     
    db.queryAsync("SELECT * FROM Balkan").then(function(rows){   
        console.log(rows);
       
      // res.send(rows);
    });
}



//**************************************    SUMMARY

module.exports.ESTSUM =  (req, res)=>{

    const ulke = req.body.name;
   // console.log(ulke);
    
    var EstSumSql= "SELECT SUM(Amount) AS 'Sum' FROM  "+ ulke +" WHERE Estimated = 'YES'";
     con.query(EstSumSql, (err, result) => {
        //console.log(result);
        var string=JSON.stringify(result);
        //console.log(string);
        var veri =  JSON.parse(string);
       // console.log(veri);
        res.send(veri);
        res.end();
    
    });
  
}
  module.exports.REALSUM = (req,res)=>{
        var veri="";
        var ulke = req.body.name;
        //console.log(ulke);
        var RealSumSql= "SELECT SUM(Amount) AS 'Sum' FROM  "+ ulke +" WHERE Estimated = 'NO'";
        con.query(RealSumSql, async (err, result) => {
         
            var string=JSON.stringify(result);
             veri =  JSON.parse(string);
            res.send(veri);

            res.end();
            console.log("Local veri", veri);
          
        });
 console.log("Global veri", veri);
}
 

module.exports.Denemem =  (req,res)=>{
    var veri="";

    var ulke = req.body.name;
    //console.log(ulke);
    var RealSumSql= "SELECT SUM(Amount) AS 'Sum' FROM  "+ ulke +" WHERE Estimated = 'NO'";
    con.query(RealSumSql, (err, result) => {
     
        var string=JSON.stringify(result);
         veri =  JSON.parse(string);
        res.send(veri);

        res.end();
        console.log("Local veri", veri);
      
    });
console.log("Global veri", veri);
}


// Thing.list = function (done) {
//     db.query("SELECT * FROM thing...",function (err,data) {
//       if (err) {
//         done(err)
//       } else {
//         done(null,data);
//       }
//     });
//   };
//   module.exports = Thing;





// module.exports.bb = (req, res) =>{
//     var ulke = req.body.name;

//  var sql = "SELECT * FROM Category";
//  con.query(sql, (err, sonuc)=>{
   
//     var kategori=[];
//     // for (var i=0; i<veri.length; ++i){
//     //  out.push(veri[i].Name);}
//   for (var i=0; i<sonuc.length; ++i){
//         kategori.push(sonuc[i].Name);
//     }
   
//    console.log(kategori);


//     var gidecek=[];
//    for(var i=0; i<kategori.length; ++i){
//     var sql ="SELECET SUM(Amount)AS " + kategori[i] +" FROM " + ulke + " WHERE Categort = " + kategori[i]
//     con.query(sql, (err, sonuc)=>{
//      console.log(result);
//        // gidecek.push(result);
    
//     }
   
//    }






// }



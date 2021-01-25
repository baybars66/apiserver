
const express = require('express');
const Worker= require('./Worker');
const mysql = require('mysql');

var app= express(); 
const con = mysql.createConnection({
    //host: "192.168.1.33",
    //host: "localhost",
    host: "88.250.131.163",
    user: "bay66",
    password: "super66",
    database: "Mrts2020",
});


//**************************************    SUMMARY

module.exports.ESTSUM =  (req, res)=>{
    const ulke = req.body.name;
   // console.log(ulke);
    
    var EstSumSql= "SELECT SUM(Amount) AS 'Sum' FROM  "+ ulke +" WHERE Estimated = 'YES'";
     con.query(EstSumSql, (err, result) => {
//const veri = Worker.work1(result);
        var string=JSON.stringify(result);
        var veri =  JSON.parse(string);
        console.log(veri);
        res.send(veri);
        res.end();
    
    });

}
  module.exports.REALSUM = (req,res)=>{
        
        var ulke = req.body.name;
        //console.log(ulke);
        var RealSumSql= "SELECT SUM(Amount) AS 'Sum' FROM  "+ ulke +" WHERE Estimated = 'NO'";
        con.query(RealSumSql, (err, result) => {
           // veri = Worker.work1(result);
            var string=JSON.stringify(result);
            var veri =  JSON.parse(string);
            res.send(veri);
            res.send();
          
        });




  
}
 



const express = require('express');
//const blu = require("bluebird");
const mysql = require('mysql');
var Promise = require("bluebird");
// Note that the library's classes are not properties of the main export
// so we require and promisifyAll them manually
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);
var app= express(); 





const con = mysql.createConnection({
    //host: "192.168.1.33",
    //host: "localhost",
    host: "88.250.131.163",
    user: "bay66",
    password: "super66",
    database: "Mrts2020",
});

const db  = Promise.promisifyAll(con);









    

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
 


module.exports.SUM =  async (req,res)=>{

    var Gidecek={
        RealTotal : "",
        EstTotal : "",

       
    }
 
    var ulke = req.body.ulke;
    console.log("SUM dayım ", ulke);


    const q1= "SELECT SUM(Amount) AS 'RealTotal' FROM  "+ ulke +" WHERE Estimated = 'NO'";
    const q2= "SELECT SUM(Amount) AS 'EstTotal' FROM  "+ ulke +" WHERE Estimated = 'YES'";
    

    await db.queryAsync(q1).then(function(rows){
        // var string=JSON.stringify(rows);
       // rowq1 =  JSON.parse(string);
      Gidecek.RealTotal=rows[0].RealTotal;
    console.log("Ulkeler veri", Gidecek.RealTotal);
    });

    await db.queryAsync(q2).then(function(rows){
     
      Gidecek.EstTotal=rows[0].EstTotal;
      
        console.log("Ulkeler veri", Gidecek);
    });


 res.send(Gidecek);
 res.end();
    
}
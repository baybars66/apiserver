
const mysql = require('mysql');
var Promise = require("bluebird");
const { response } = require('express');


const con = mysql.createConnection({
    //host: "192.168.1.33",
    //host: "localhost",
    host: "88.250.131.163",
    user: "bay66",
    password: "super66",
    database: "Mrts2020",
});

const db  = Promise.promisifyAll(con);



module.exports.Gen =  async (req,res)=>{
var gelen="";
var Gidecek ={
    EstSum:[],
    RealSum:[]

}

const Quarter=[' AND Depart > "2020-01-01" AND Depart < "2020-03-31"',
               ' AND Depart > "2020-04-01" AND Depart < "2020-06-31"',
               ' AND Depart > "2020-07-01" AND Depart < "2020-09-31"', 
               ' AND Depart > "2020-10-01" AND Depart < "2020-12-31"',
            ];

Sorgula= async(mm)=>{



    sql ='SELECT SUM(Amount) AS "Sum" FROM Tum WHERE Estimated= "YES"' + mm;

        await db.queryAsync(sql).then(function(rows){
           gelen=rows[0].Sum;

        });
       
        Gidecek.EstSum.push(gelen);
    
    sql ='SELECT SUM(Amount) AS "Sum" FROM Tum WHERE Estimated= "NO"' + mm;

        await db.queryAsync(sql).then(function(rows){
            gelen=rows[0].Sum;
            //console.log(Gidecek);
    });
    Gidecek.RealSum.push(gelen);
    if(Gidecek.RealSum[3]!= null) {
        res.send(Gidecek);
        res.end();

    }
    
}

Quarter.forEach ((mm)=>{
      Sorgula(mm);
     
});



}

const mysql = require('mysql');
const express = require('express');

var app= express();
const bodyparser = require('body-parser');


app.use(bodyparser.json());

var con = mysql.createConnection({
 


  host: "88.250.131.163",
 user: "bay66",
 password: "super66",
 database: "Mrts2020"

});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");

});

app.listen(3006, () => console.log("server dinler") );


app.get('/kisiler',(req,res)=>{

    con.query("SELECT * FROM users", (err, result, fields) => {

        if (!err)
          // console.log(result);
           //console.log(result[0].id);
          res.send(result);
            else
            console.log(err);
    })
});
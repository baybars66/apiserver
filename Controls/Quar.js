
const mysql = require('mysql');
var Promise = require("bluebird");
const QuarterSum = require ('../Functions/QuarterSum')

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
   
donem=req.body.peri;
var CatList=[];
var cc = []; 
var dd="";
var say =1;
const Cat="SELECT Name FROM Category"
  await db.queryAsync(Cat).then(function(rows){
    //  Food= rows[0].Food;
    //console.log(rows);
    rows.map( adam =>{
    CatList.push(adam.Name);
    });
  });


  var ali = async(bb) =>{
 await QuarterSum.QuaALL(donem, bb).then((resp) =>{
  dd=resp;
 });
   // console.log(cc);
   cc.push(dd);
  if(say===CatList.length) {
res.send(cc);
res.end();
 } else {

  say =say +1 ;
}
   console.log(CatList.length);
   
   //console.log(cc);
}
  

 CatList.forEach( item =>{
    //console.log(sirala);
  var geldi =ali(item);
  //console.log(geldi);
});

//console.log(cc);

}


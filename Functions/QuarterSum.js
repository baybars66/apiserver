
const mysql = require('mysql');
var Promise = require("bluebird");

const con = mysql.createConnection({
    //host: "192.168.1.33",
    //host: "localhost",
    host: "88.250.131.163",
    user: "bay66",
    password: "super66",
    database: "Mrts2020",
});

const db  = Promise.promisifyAll(con);



module.exports.QuaALL = async (donem, cat) =>{
 
// console.log(cat);
// console.log(donem);
var isim=donem + cat;
var gelen ="";
var donecek= "";
const Quarter=[' AND Depart > "2020-01-01" AND Depart < "2020-03-31"', ' AND Depart > "2020-04-01" AND Depart < "2020-06-31"',
               ' AND Depart > "2020-07-01" AND Depart < "2020-09-31"', ' AND Depart > "2020-10-01" AND Depart < "2020-12-31"',]
    

 var period = "";
// console.log(donem, cat);
 switch (donem){
    case "Quarter1" : 
        period = Quarter[0]
    case "Quarter2" : 
        period = Quarter[1];
    case "Quarter3" : 
        period = Quarter[2];
    case "Quarter4" : 
        period = Quarter[3];
    //default:
   // console.log("QuarterSum.Qua1");
 }
        
 var sql = "SELECT SUM(Amount) AS 'SUM' FROM Tum Where  Estimated = 'NO' AND Category = '" + cat+ "'" + period; 
try {
await db.queryAsync(sql).then(function(rows){
  //  Food= rows[0].Food;
  //console.log(rows);
  gelen=rows[0].SUM;

 // donecek.push ({isim , gelen});
});
} catch(err){
 console.log(err);
}
donecek={isim , gelen};
//console.log(donecek);
return donecek;


}


//   var Gidecek={
//     RealTotal : "",
//     EstTotal : "",
//     Food:"",
//     Trans: "",
//     Lodging: "",
//     Other: "",
// }

//  //var sql ="SELECT Sum(Amount) AS 'SUM' FROM Tum WHERE Estimated = 'YES' " + period;


 


// //   await db.queryAsync(Q1REALSUM).then(function(rows){
// //     //  Food= rows[0].Food;
// //     //console.log(rows);
// //     Gidecek.Q1RealTotal=rows[0].Q1REALSUM;

// //    });



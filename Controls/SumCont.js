
const mysql = require('mysql');
const con = mysql.createConnection({
 

    //host: "192.168.1.33",
    //host: "localhost",
    host: "88.250.131.163",
    user: "bay66",
    password: "super66",
    database: "Mrts2020",
   
   
   });




//**************************************    SUMMARY



module.exports.SUM1 = (req,res)=>{
  
    const ulke = req.body.name;
    const cat = {
        ali : "66",
        veli : "77"
  
    }
   var CAT = "SELECT * FROM Category" ;
   con.query(CAT, (err, result, fields) => {
  
   if (!err){
    //
     console.log(result);
  
     var string=JSON.stringify(result);
     console.log('>> string: ', string );
     var cat =  JSON.parse(string);
     console.log('>> json: ', cat);
   
    
     console.log('>> json: ', cat.length);
     console.log('>> user.name: ', cat[0].Name);
    // req.list = json;
  
  }
      else
      console.log(err);
  });
  
  const EstSumSql= "SELECT SUM(Amount) AS 'EstSum' FROM  "+ ulke +" WHERE Estimated = 'YES'";
   con.query(EstSumSql, (err, result, fields) => {
  
   if (!err){
    //
     console.log(result);
  
     var Esmstring=JSON.stringify(result);
     console.log('>> string: ', Esmstring );
     var EstSum =  JSON.parse(Esmstring);
    
   
    
    // console.log('>> json: ', cat.length);
    console.log('>> user.name: ', EstSum[0].EstSum);
    // req.list = json;
  
  }
      else
      console.log(err);
  });
  
  
  
  
  
  
  }
  


module.exports.work1 = (bb)=>{
    //console.log(cc);
    //console.log(bb);
    var string=JSON.stringify(bb);
    var cat =  JSON.parse(string);
  //  console.log('>> json: ', cat);
  
   
   // console.log('>> json: ', cat.length);
   console.log(cat[0].Sum);
    return (cat[0].Sum);




    
  }
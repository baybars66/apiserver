const path = require('path');
const express = require ('express');
const router = express.Router();

var DescCont = require ('../Controls/Confg/DescCon')
var KisiCont = require ('../Controls/Confg/KisiCont')


//router.get('/', Controls.PindexCon);
//router.get('/deneme/Login', Controls.loginCon);
//router.get('/ana', Controls.deneCon);


router.get('/kisiler',KisiCont.Kisiler);


router.get('/Desc', DescCont.DescALL);
//router.post('/Desc/Add/:name', DescCont.DescADD);
// router.delete('/kisiler',KisiCont.Kisiler);

module.exports = router;

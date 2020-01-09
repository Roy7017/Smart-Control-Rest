const controlleur =require("../models/controlleur");
const enregistreur =require("../models/enregistreur");
const modele =require("../models/modele");
const organisme =require("../models/organisme");
const piece_invalide =require("../models/piece_invalide");
const piece =require("../models/piece");
const type_organisme =require("../models/type_organisme");
const type_piece =require("../models/type_piece");
const vehicule =require("../models/vehicule");
var express = require('express');

var router = express.Router();


// Crud pour chaque Modele  
   // Crud pour chaque  
    

router.get("/posts",(req,res)=>
   res.json({status:'ok'})
    
);


module.exports=router;


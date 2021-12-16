const express= require('express');
const app= express();
const cors= require('cors');
const bodyParser = require('body-parser');
//const http = require ('http').Server(app);
//------------------------------------------
//app.use:(cors et bodyparser)
app.use(cors({
    //origin: "http://localhost:8081"
    origin: "*",
    "Access-Control-Allow-Origin": "*"
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//------------------------------------------


// connexion à MONGOOSE :
const db = require("./app/models/connexion");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("bdd connectée!");
  })
  .catch(err => {
    console.log("on ne peut pas se connecter à la bdd!", err);
    process.exit();
  });
//app.get:
app.get('/', (req,res)=>{
    res.json({message:"bienvenue sur lfqnep"});
})
//-----------------------------------------
//----------------------------------------- */
require('./app/routes/film.routes')(app);
//------------------------------------------

////////////////////////////////////////////////////////////////////////
const port = process.env.PORT || 1234;
app.listen(port,()=>{ console.log('ecoute du port '+port);});

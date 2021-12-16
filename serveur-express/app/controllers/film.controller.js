const db = require('../models/connexion.js');
const FilmModel = require('../models/film.model.js');
//FilmModel = db.films;
// ce constructeur provient du mongoose.model!!

exports.create=(req,res)=>{
 const film = new FilmModel({
    pseudo: req.body.pseudo,
    email: req.body.email,
    titre: req.body.titre,
    accroche : req.body.accroche,
   // genre: req.body.genre,
    pitch: req.body.pitch,
    note: req.body.note,
    casting: req.body.casting,
    etoiles:0,
    nbVotesPublic:0,
   // starsPublic: this.nbVotesPublic/this.etoiles,
    starsPublic: 0,
    starsAdmin: 0,
    published: false
    //affiche: ''
 });
 film.save(film)
 .then(data=>{ res.send(data);})
 .catch(err=>{ res.status(500).send({message: err.message});});
};
//------------------------------------
exports.findAll=(req,res)=>{
 FilmModel.find({})
 .then(data=>{
    res.send(data);
 })
 .catch(err=>{
    res.status(500).send({
       message:err.message
    });
 });
};

//------------------------------------

exports.findAllPublished=(req,res)=>{
  
   FilmModel.find({published: true})
   .then(data=>{
      res.send(data);
   })
   .catch(err=>{
      res.status(500).send({
         message: err.message
      })
   });
  };
  //---------------------------------
  exports.findOne=(req,res)=>{
 const id = req.params.id;

 FilmModel.find({titre:id})
 .then(data=>{
    res.send(data);
    
 })
 .catch(err=>{
    res.status(500).send({message: err.message})
 });
};
//---------------------------------
  exports.findNoPub=(req,res)=>{
  
   FilmModel.find({'published':false})
   .then(data=>{
      res.send(data);
   })
   .catch(err=>{
      res.status(500).send({message: err.message});
   });
  };
//------------------------------------
exports.update=(req,res)=>{
   if(!req.body){
      return res.status(400).send({message: 'data to update can not be empty!'});
  }
  const id = req.params.id;
  Tutorial.findByIdAndUpdate(id,req.body, {useFindAndModify: false})
  .then(data=>{
      if(!data){
          res.status(404).send({message: 'cannot update tutorial with this id, maybe not found'});
      }
  })
  .catch(err=>{
      res.status(500).send({
          message: 'error updating tuto with this id'
      });
  });
};
//-------------------------------------
exports.deleteAll=(req,res)=>{
FilmModel.deleteMany({})
.then(data=>{
   res.send({message: `${data.deletedCount} ont été supprimés avec succès.`});
})
.catch(err=>{
   res.status(500).send({message: err.message});
});

};
//-------------------------------------
exports.delete=(req,res)=>{
   const id = req.body.params;
FilmModel.deleteOne({titre:id})
.then()
.catch(err=>{
   res.status(500).send({message: err.message});
});
};
const dbConfig = require('../config/db.config.js');
//-------------------------------------------------
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//--------------------------------------------------
db={};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.films= require('./film.model.js')(mongoose);

module.exports= db;

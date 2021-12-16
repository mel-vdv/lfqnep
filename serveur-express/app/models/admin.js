var mongoose = require('mongoose');

const schema = mongoose.Schema({
    pseudo: String,
    email: String,
    
});
const AdminModel = mongoose.model("admin", schema);

module.exports = AdminModel;
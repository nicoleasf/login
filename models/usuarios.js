var mongoose = require('mongoose')

var modelo = new mongose.Schema({
    nome:String,
    email:String,
    senha:String
})

module.exports = mongoose.model('usuarios',modelo)
var mongoose = require('mongoose')

var modelo = new mongoose.Schema({
    data:Data,
    tipo:String,
    entrega:String,
    disciplina:String,
    instrucoes:String
})

module.exports = mongoose.model('atividades',modelo)

var mongoose = require('mongoose')

var conexao = ()=>{
    mongoose.connect('mongodb+srv://registrouser:simba@cluster0.llvzd.mongodb.net/login_registro?retryWrites=true&w=majority')
}
module.exports = conexao
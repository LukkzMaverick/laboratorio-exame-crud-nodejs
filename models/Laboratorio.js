const mongoose = require("mongoose")
const LaboratorioSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    endereco:{
        type: String,
        required: true
    },
    status: {
        type: String,
        enum : ['ATIVO','INATIVO'],
        default: 'ATIVO'
    },
})

module.exports = mongoose.model('laboratorio', LaboratorioSchema)
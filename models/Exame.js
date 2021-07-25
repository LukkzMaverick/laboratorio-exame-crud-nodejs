const mongoose = require("mongoose")
const ExameSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    tipo: {
        type: String,
        enum : ['ANALISE_CLINICA','IMAGEM'],
    },
    status: {
        type: String,
        enum : ['ATIVO','INATIVO'],
        default: 'ATIVO'
    },
})

module.exports = mongoose.model('exame', ExameSchema)
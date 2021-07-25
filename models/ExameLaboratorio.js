const mongoose = require("mongoose")
const ExameLaboratorioSchema = new mongoose.Schema({
    exame:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'exame',
        required: true
    },
    laboratorio:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'laboratorio',
        required: true
    },
})

module.exports = mongoose.model('exameLaboratorio', ExameLaboratorioSchema)
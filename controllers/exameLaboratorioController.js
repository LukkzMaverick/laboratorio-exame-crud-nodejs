const MESSAGES = require('../utils/messages');
const { validationResult } = require('express-validator');
const ExameLaboratorio = require('../models/ExameLaboratorio');

module.exports = {

    async create(req, res){
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            const {exameId, laboratorioId} = req.body
            const jaExisteAssociacao = await ExameLaboratorio.find({exame: exameId, laboratorio: laboratorioId})
            if(jaExisteAssociacao.length !== 0){
                return res.status(409).send({ errors: [{ msg: MESSAGES.LABORATORIO_ASSOCIADO_A_EXAME }] })
            }
            const exameLaboratorio = new ExameLaboratorio({exame: exameId, laboratorio: laboratorioId})
            if(exameLaboratorio._id){
                await exameLaboratorio.save()
                return res.status(201).send(exameLaboratorio)
            }else{
                return res.status(404).send({ errors: [{ msg: MESSAGES.DATABASE_ERROR }] })
            }
        } catch (error) {
            console.error(error.message)
            return res.status(500).send({ errors: [{ msg: MESSAGES.INTERNAL_SERVER_ERROR }] })
        }
    },
    async laboratoriosPorExame(req, res){
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            const {exameId} = req.params
            const laboratoriosPorExame = await ExameLaboratorio.find({exame: exameId}).populate('laboratorio')
            let laboratorios = []
            for(exameLaboratorio of laboratoriosPorExame){
                const laboratorio = JSON.parse(JSON.stringify(exameLaboratorio.laboratorio))
                laboratorios.push({...laboratorio,exameLaboratorioId: exameLaboratorio._id})
            }
            if(laboratorios.length > 0){
                return res.status(200).send(laboratorios)
            }else{
                return res.status(404).send({ errors: [{ msg: MESSAGES['404_LABORATORIOS_POR_EXAME'] }] })
            }
        } catch (error) {
            console.error(error.message)
            return res.status(500).send({ errors: [{ msg: MESSAGES.INTERNAL_SERVER_ERROR }] })
        }
    },

    async examesPorLaboratorio(req, res){
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            const {laboratorioId} = req.params
            const examesPorLaboratorio = await ExameLaboratorio.find({laboratorio: laboratorioId}).populate('exame')
            let exames = []
            for(exameLaboratorio of examesPorLaboratorio){
                const exame = JSON.parse(JSON.stringify(exameLaboratorio.exame))
                exames.push({...exame,exameLaboratorioId: exameLaboratorio._id})
            }
            if(exames.length > 0){
                return res.status(200).send(exames)
            }else{
                return res.status(404).send({ errors: [{ msg: MESSAGES['404_EXAMES_POR_LABORATORIO'] }] })
            }
        } catch (error) {
            console.error(error.message)
            return res.status(500).send({ errors: [{ msg: MESSAGES.INTERNAL_SERVER_ERROR }] })
        }
    },

    async delete(req, res){
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            const {exameLaboratorioId} = req.params
            const exameLaboratorio = await ExameLaboratorio.findByIdAndDelete(exameLaboratorioId)
            if(exameLaboratorio){
                return res.status(204).send()
            }else{
                return res.status(404).send({ errors: [{ msg: MESSAGES['404_EXAME_LABORATORIO'] }] })
            }
        } catch (error) {
            console.error(error.message)
            return res.status(500).send({ errors: [{ msg: MESSAGES.INTERNAL_SERVER_ERROR }] })
        }
    }
}
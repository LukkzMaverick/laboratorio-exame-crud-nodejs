const MESSAGES = require('../utils/messages');
const { validationResult } = require('express-validator');
const Laboratorio = require('../models/Laboratorio');

module.exports = {

    async create(req, res){
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            const {nome, endereco} = req.body
            const laboratorio = new Laboratorio({nome,endereco})
            if(laboratorio._id){
                await laboratorio.save()
                return res.status(201).send(laboratorio)
            }else{
                return res.status(404).send({ errors: [{ msg: MESSAGES.DATABASE_ERROR }] })
            }
        } catch (error) {
            console.error(error.message)
            return res.status(500).send({ errors: [{ msg: MESSAGES.INTERNAL_SERVER_ERROR }] })
        }
    },
    async index(req, res){
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            const laboratorios = await Laboratorio.find({status: 'ATIVO'})
            if(laboratorios.length > 0){
                return res.status(200).send(laboratorios)
            }else{
                return res.status(404).send({ errors: [{ msg: MESSAGES['404_LABORATORIOS'] }] })
            }
        } catch (error) {
            console.error(error.message)
            return res.status(500).send({ errors: [{ msg: MESSAGES.INTERNAL_SERVER_ERROR }] })
        }
    },

    async update(req, res){
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            const {laboratorioId} = req.params
            const laboratorio = await Laboratorio.findByIdAndUpdate(laboratorioId, {$set: req.body}, {new: true})
            if(laboratorio){
                return res.status(200).send(laboratorio)
            }else{
                return res.status(404).send({ errors: [{ msg: MESSAGES['404_LABORATORIO'] }] })
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
            const {laboratorioId} = req.params
            const laboratorio = await Laboratorio.findByIdAndUpdate(laboratorioId, {$set: {status: 'INATIVO'}}, {new: true})
            if(laboratorio){
                return res.status(200).send(laboratorio)
            }else{
                return res.status(404).send({ errors: [{ msg: MESSAGES['404_LABORATORIO'] }] })
            }
        } catch (error) {
            console.error(error.message)
            return res.status(500).send({ errors: [{ msg: MESSAGES.INTERNAL_SERVER_ERROR }] })
        }
    }
}
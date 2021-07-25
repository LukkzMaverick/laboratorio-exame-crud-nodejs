const MESSAGES = require('../utils/messages');
const { validationResult } = require('express-validator');
const Exame = require('../models/Exame');

module.exports = {

    async create(req, res){
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            const {nome, tipo} = req.body
            const exame = new Exame({nome,tipo})
            if(exame._id){
                await exame.save()
                return res.status(201).send(exame)
            }else{
                return res.status(404).send({ errors: [{ msg: MESSAGES.DATABASE_ERROR }] })
            }
        } catch (error) {
            return res.status(500).send({ errors: [{ msg: MESSAGES.INTERNAL_SERVER_ERROR }] })
        }
    },
    async index(req, res){
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            const exames = await Exame.find({status: 'ATIVO'})
            if(exames.length > 0){
                return res.status(200).send(exames)
            }else{
                return res.status(404).send({ errors: [{ msg: MESSAGES['404_EXAMES'] }] })
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
            const {exameId} = req.params
            const exame = await Exame.findByIdAndUpdate(exameId, {$set: req.body}, {new: true})
            if(exame){
                return res.status(200).send(exame)
            }else{
                return res.status(404).send({ errors: [{ msg: MESSAGES['404_EXAME'] }] })
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
            const {exameId} = req.params
            const exame = await Exame.findByIdAndUpdate(exameId, {$set: {status: 'INATIVO'}}, {new: true})
            if(exame){
                return res.status(200).send(exame)
            }else{
                return res.status(404).send({ errors: [{ msg: MESSAGES['404_EXAME'] }] })
            }
        } catch (error) {
            console.error(error.message)
            return res.status(500).send({ errors: [{ msg: MESSAGES.INTERNAL_SERVER_ERROR }] })
        }
    }
}
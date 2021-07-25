const { check } = require("express-validator")
const MESSAGES = require("../messages")

const validatorCadastrarExame = [
    check('nome',MESSAGES.NAME_REQUIRED).notEmpty(),
    check('nome',MESSAGES.NAME_MUST_BE_A_STRING).isString(),
    check('tipo',MESSAGES.TIPO_REQUIRED).notEmpty(),
    check('tipo',MESSAGES.TIPO_ENUM).matches('ANALISE_CLINICA|IMAGEM')
]

module.exports = {
    validatorCadastrarExame
}
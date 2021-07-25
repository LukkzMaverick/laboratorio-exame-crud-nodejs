const { check } = require("express-validator")
const MESSAGES = require("../messages")

const validatorCadastrarLaboratorio = [
    check('nome',MESSAGES.NAME_REQUIRED).notEmpty(),
    check('nome',MESSAGES.NAME_MUST_BE_A_STRING).isString(),
    check('endereco',MESSAGES.ENDERECO_REQUIRED).notEmpty(),
    check('endereco',MESSAGES.ENDERECO_MUST_BE_A_STRING).isString(),
]

module.exports = {
    validatorCadastrarLaboratorio
}
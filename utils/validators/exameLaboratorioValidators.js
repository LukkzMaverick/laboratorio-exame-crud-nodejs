const { check } = require("express-validator")
const MESSAGES = require("../messages")

const validatorCadastrarExameLaboratorio = [
    check('laboratorioId',MESSAGES.LABORATORIO_ID_REQUIRED).notEmpty(),
    check('laboratorioId',MESSAGES.LABORATORIO_ID_MUST_BE_A_STRING).isString(),
    check('exameId',MESSAGES.EXAME_ID_REQUIRED).notEmpty(),
    check('exameId',MESSAGES.EXAME_ID_MUST_BE_A_STRING).isString(),
]

module.exports = {
    validatorCadastrarExameLaboratorio
}
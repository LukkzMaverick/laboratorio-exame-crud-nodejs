const {Router} = require('express')
const exameLaboratorioController = require('../controllers/exameLaboratorioController')
const { validatorCadastrarExameLaboratorio } = require('../utils/validators/exameLaboratorioValidators')

const router = Router()

router.post('/', validatorCadastrarExameLaboratorio,exameLaboratorioController.create)
router.get('/laboratoriosPorExame/:exameId', exameLaboratorioController.laboratoriosPorExame)
router.get('/examesPorLaboratorio/:laboratorioId', exameLaboratorioController.examesPorLaboratorio)
router.delete('/:exameLaboratorioId',exameLaboratorioController.delete)

module.exports = router

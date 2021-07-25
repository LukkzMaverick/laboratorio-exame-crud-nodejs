const {Router} = require('express')
const laboratorioController = require('../controllers/laboratorioController')
const { validatorCadastrarLaboratorio } = require('../utils/validators/laboratorioValidators')
const router = Router()

router.post('/', validatorCadastrarLaboratorio,laboratorioController.create)
router.get('/', laboratorioController.index)
router.patch('/:laboratorioId', laboratorioController.update)
router.delete('/:laboratorioId',laboratorioController.delete)

module.exports = router

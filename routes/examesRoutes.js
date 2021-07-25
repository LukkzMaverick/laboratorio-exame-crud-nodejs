const {Router} = require('express')
const exameController = require('../controllers/exameController')
const { validatorCadastrarExame } = require('../utils/validators/exameValidators')
const router = Router()

router.post('/', validatorCadastrarExame , exameController.create)
router.get('/', exameController.index)
router.patch('/:exameId', exameController.update)
router.delete('/:exameId',exameController.delete)

module.exports = router

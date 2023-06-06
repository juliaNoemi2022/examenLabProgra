const express = require('express')
const viandasController = require('../controllers/viandas.controller')

const router = express.Router()



router.get('/', viandasController.getAllViandas)
router.get('/:codigo', viandasController.getViandasByCodigo)
/*router.delete('/:dni',alumnosController.deletealumnoByDni) 
router.post('/', alumnosController.createAlumno)
router.put('/:dni', alumnosController.updateAlumno )*/

module.exports = { router}
const express = require('express')
const viandasController = require('../controllers/viandas.controller')

const router = express.Router()



router.get('/', viandasController.getAllViandas)
router.get('/:codigo', viandasController.getViandasByCodigo)
router.post('/', viandasController.createVianda)
router.put('/:codigo', viandasController.updateVianda )

module.exports = { router}
const express = require('express')
const pedidosController = require('../controllers/pedidos.controller')

const router = express.Router()



router.get('/',pedidosController.getAllPedidos )
router.get('/:id', pedidosController.getPedidosById)

router.post('/', pedidosController.createPedido )


module.exports = { router}
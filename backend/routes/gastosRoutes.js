const express = require('express')
const router = express.Router()

const { getGastos, addGastos, deleteGastos} = require('../controllers/gastosController')

//Obtener gastos
router.get('/', getGastos)

//Agregar gastos
router.post('/', addGastos)

//Borrar gastos
router.delete('/:id', deleteGastos)

module.exports = router
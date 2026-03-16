const asyncHandler = require("express-async-handler")
const Gasto = require("../models/gastosModel")

const getGastos = asyncHandler(async (req, res) => {
    const gastos = await Gasto.find({})
    res.status(200).json(gastos)
})

const addGastos = asyncHandler(async (req, res) => {
    if(!req.body.descripcion) {
        res.status(400)
        throw new Error("Teclea la descripción")
    }
    if(!req.body.importe) {
        res.status(400)
        throw new Error("Teclea el importe")
    }

    const gasto = await Gasto.create ({
        descripcion: req.body.descripcion,
        importe: req.body.importe
    })

    if (gasto) {
        res.status(201).json(gasto)
    } else {
        res.status(500)
        throw new Error("Hubo un error")
    }
})

const deleteGastos = asyncHandler(async (req, res) => {
    const gasto = await Gasto.findById(req.params.id)
    if (!gasto) {
        res.status(404)
        throw new Error("Gasto no encontrado")
    } else {
        await Gasto.deleteOne(gasto)
        res.status(200).json({"mensaje" : "Gasto eliminado"})
    }
})

module.exports = {
    getGastos, addGastos, deleteGastos
}
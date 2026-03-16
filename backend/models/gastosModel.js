const mongoose = require("mongoose")

const gastosSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: [true, "Por favor teclea una descripción del gasto"]
    },
    importe: {
        type: Number,
        required: [true, "Por favor teclea el importe del gasto"]
    },
}, {
    timestamp: true
})

module.exports = mongoose.model('Gasto', gastosSchema)
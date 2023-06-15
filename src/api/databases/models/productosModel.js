import mongoose from 'mongoose'

const collection = 'productos'

const types = {
    // _id: {type: mongoose.Types.ObjectId}
    nombre: { type: String, required: true },
    precio: { type: Number, required: true, max: 99 },
    stock: { type: Boolean, required: true }
}

const schema = new mongoose.Schema(types)

export const productosModel = mongoose.model(collection, schema)
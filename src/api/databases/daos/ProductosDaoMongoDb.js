import { MongoDb } from "../../config/connections/MongoDb.js"
import { productosModel } from "../models/productosModel.js";

let instance = null;

export class ProductosDaoMongoDb extends MongoDb {

    constructor() { super() }

    static get get() {
        if (!instance)
            instance = new ProductosDaoMongoDb()
        return instance
    }

    // Metodos

    getProducts = async () =>
        await productosModel.find({})


    getProduct = async (id) =>
        // await productosModel.find({ _id: id })
        await productosModel.findById({ _id: id })

    postProduct = async (product) =>
        await new productosModel(product).save()

    modifyProduct = async (id, product) => {

    }

    deleteProduct = async (id) => {

    }
}
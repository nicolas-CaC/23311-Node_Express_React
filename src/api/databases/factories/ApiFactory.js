import { config } from "../../config/config.js";
import { ProductosDaoFirebase } from "../daos/ProductosDaoFirebase.js";
import { ProductosDaoMongoDb } from "../daos/ProductosDaoMongoDb.js";

let instance = null;

export class ApiFactory {

    #dao;

    constructor() {
        this.#dao = this.#getDao
    }

    static get get() {
        if (!instance)
            instance = new ApiFactory()
        return instance
    }

    get #getDao() {
        switch (config.db.origin) {
            case 'mongodb':
                return ProductosDaoMongoDb.get
            case 'firebase':
                return ProductosDaoFirebase.get
            default:
                throw new Error("La base de datos esta mal configurada")
        }
    }

    // Metodos

    getProducts = async () =>
        await this.#dao.getProducts()

    getProduct = async (id) =>
        await this.#dao.getProduct(id)

    postProduct = async (product) =>
        await this.#dao.postProduct(product)

    modifyProduct = async (id, product) =>
        await this.#dao.modifyProduct(id, product)

    deleteProduct = async (id) =>
        await this.#dao.deleteProduct(id)
}
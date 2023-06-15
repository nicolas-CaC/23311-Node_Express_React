import { ApiFactory } from "../factories/ApiFactory.js";

let instance = null;

export class ApiRepository {

    factory = ApiFactory.get

    static get get() {
        if (!instance)
            instance = new ApiRepository()
        return instance
    }

    // Metodos

    getProducts = async () =>
        await this.factory.getProducts()

    getProduct = async (id) =>
        await this.factory.getProduct(id)

    postProduct = async (product) =>
        await this.factory.postProduct(product)

    modifyProduct = async (id, product) =>
        await this.factory.modifyProduct(id, product)

    deleteProduct = async (id) =>
        await this.factory.deleteProduct(id)
}
import bcrypt from 'bcryptjs'
import { config } from '../config/config.js';
import { ApiRepository } from '../databases/repositories/ApiRepository.js';

export class ApiServices {

    static instance = null;

    repository = ApiRepository.get

    static get get() {
        if (!ApiServices.instance)
            ApiServices.instance = new ApiServices()
        return ApiServices.instance
    }

    // Metodos privados => Encriptación Asimétrica

    #convertToHash = async (key, value) => {
        let res;

        try {
            res = { [key]: await bcrypt.hash(value, config.crypt.rounds) }
        }

        catch (e) {
            res = { error: 'Hubo problemas al encriptar la contraseña (para su seguridad)' }
        }

        finally {
            return res
        }

    }

    #verifyHash = async (key, value, hashFromDB) => {
        let res;
        try { res = { [key]: await bcrypt.compare(value, hashFromDB) } }
        catch (e) { res = { error: 'Hubo problemas al verificar la contraseña' } }
        finally { return res }
    }

    // Servicios: Pass

    convertPassToHash = async ({ pass }) => {
        const passEncrypted = await this.#convertToHash('pass', pass)
        return passEncrypted
    }

    verifyPass = async ({ pass }) => {
        const hashFromDB = '$2a$10$dIM1Uunev/wj84p3crcikOKEhYE4ONx9/tr0TXMMD.DwR7Ae30rRq'
        const confirm = await this.#verifyHash('verify', pass, hashFromDB)
        return confirm
    }

    // Metodos Productos

    getProducts = async () =>
        await this.repository.getProducts()

    getProduct = async (id) =>
        await this.repository.getProduct(id)

    postProduct = async (product) => {
        product.stock = parseInt(product.stock) > 0
        const result = await this.repository.postProduct(product)
        return result
    }

    modifyProduct = async (id, product) => {

    }

    deleteProduct = async (id) =>
        await this.repository.deleteProduct(id)

}
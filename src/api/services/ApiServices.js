import bcrypt from 'bcryptjs'
import { config } from '../config/config.js';

export class ApiServices {

    static instance = null;

    // repository

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

        try {
            res = { [key]: await bcrypt.compare(value, hashFromDB) }
        }

        catch (e) {
            res = { error: 'Hubo problemas al verificar la contraseña' }
        }

        finally {
            return res
        }
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

    getProduct = async (id) => ({ id, nombre: 'Jugo', precio: 200 })

    postProduct = async ({ nombre, categoria, stock, precio }) => {
        console.log('Nombre:', nombre)
        console.log('categoria:', categoria)
        console.log('stock:', stock)
        console.log('precio:', precio)
        return true
    }

}
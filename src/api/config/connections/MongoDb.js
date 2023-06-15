import mongoose from 'mongoose'
import dotenv from './../dotenv.js'

let instance = null;

export class MongoDb {

    constructor() {
        if (!instance)
            MongoDb.connection()
    }

    static async connection() {
        try {
            console.log('Conectando a DB:MongoDb')
            await mongoose.connect(process.env.MONGO_URL)
            console.log('\x1b[30m\x1b[42m%s\x1b[0m', 'MongoDb: Conexión exitosa!')
        }

        catch (err) { console.log('Error en MongoDb:', err) }
    }
}
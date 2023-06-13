import { ApiServices } from "../services/ApiServices.js";

let instance = null;

export class ApiController {

    services = ApiServices.get

    // Patrón de diseño creacional: Singleton

    static get get() {
        if (!instance)
            instance = new ApiController()
        return instance
    }

    // Controladores: Pass

    postController = (_, res) =>
        res.json({ holi: 'Soy PostApiController' })

    putController = async (req, res) => {
        const passEncrypted = await this.services.convertPassToHash(req.body)
        res.json(passEncrypted)
    }

    patchController = async (req, res) => {
        const confirm = await this.services.verifyPass(req.body)
        console.log(confirm)
        res.json(confirm)
    }

    errorController = (req, res) => res.redirect('/')

    // Controllers: Productos

    getProducts = async (req, res) => {
        console.clear();
        console.log('Recibido')
        res.json({ x: 'Controller' })

    }

    getProduct = async (req, res) => {
        const { id } = req.params
        const product = await this.services.getProduct(id)
        res.json(product)
    }

    postProduct = async (req, res) => {

        // const { body, query, params } = req
        const { body } = req

        const result = await this.services.postProduct(body)

        result
            ? res.redirect('/exito.html')
            : res.redirect('/')
    }
}
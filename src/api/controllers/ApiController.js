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


}
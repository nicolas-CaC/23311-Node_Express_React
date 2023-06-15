import { decrypt, encrypt } from "../../utilities/crypto.js";
import { createToken, verifyToken } from "../../utilities/token.js";
import { ApiController } from "../controllers/ApiController.js";

let instance = null;

export class ApiRouter {

    controller = ApiController.get

    static get get() {
        if (!instance)
            instance = new ApiRouter()
        return instance
    }

    // Rutas

    api = (app) =>

        app
            .get('/api/pass', (_, res) => res.json({ holi: 'vos' }))
            .post('/api/pass', this.controller.postController)
            .put('/api/pass', this.controller.putController)
            .patch('/api/pass', this.controller.patchController)

            .get('/api/productos', this.controller.getProducts)
            .get('/api/productos/:id', this.controller.getProduct)
            .post('/api/productos', this.controller.postProduct)
            .put('/api/productos', this.controller.modifyProduct)
            .delete('/api/productos', this.controller.deleteProduct)

            .get('/api/cart', (_, res) => res.json({ holi: 'apiget' }))
            .post('/api/cart', (_, res) => res.json({ holi: 'apipost' }))
            .put('/api/cart', (_, res) => res.json({ holi: 'apiput' }))
            .delete('/api/cart', (_, res) => res.json({ holi: 'apidel' }))

            .put('/api/login', (_, res) => {
                let valor = 'valorcito'
                let cryptedData = encrypt(valor)

                const token = createToken({ user: 'Nico' })
                console.log(token)
                console.log(Date.now())

                res
                    .status(200)
                    .cookie('JWT', token)
                    .cookie('campo', cryptedData, { signed: true })
                    .json({ login: 'no' })
            })

            .put('/api/usocookies', (req, res) => {

                const { cookies, signedCookies } = req
                // console.log({ cookies })
                // console.log({ signedCookies })

                // let decryptedData = decrypt(signedCookies.campo)
                // console.log({ decryptedData })

                const token = verifyToken(req.header('Authorization'))
                console.log('Decoded Token:', token)

                res.send("Usando Cookies")
            })

            .get('*', this.controller.errorController)
}

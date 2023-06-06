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

            .get('/api/productos', (_, res) => res.json({ holi: 'apiget' }))
            .post('/api/productos', (_, res) => res.json({ holi: 'apipost' }))
            .put('/api/productos', (_, res) => res.json({ holi: 'apiput' }))
            .delete('/api/productos', (_, res) => res.json({ holi: 'apidel' }))

            .get('/api/cart', (_, res) => res.json({ holi: 'apiget' }))
            .post('/api/cart', (_, res) => res.json({ holi: 'apipost' }))
            .put('/api/cart', (_, res) => res.json({ holi: 'apiput' }))
            .delete('/api/cart', (_, res) => res.json({ holi: 'apidel' }))

            .get('*', this.controller.errorController)
}

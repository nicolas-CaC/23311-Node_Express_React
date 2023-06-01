import express from 'express'

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.get('/jeison', (_, res) => res.json({ holi: 'vos' }))
app.get('*', (_, res) => res.redirect('/'))

const server = app.listen(PORT, () =>
    console.log(`Contectado en http://localhost:${server.address().port}`))
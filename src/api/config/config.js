export const config = {
    db: {
        origin: 'mongodb',
        table: 'products'
    },
    crypt: { rounds: 10 }
}

export const corsConfig = {
    // origin: 'http://127.0.0.1:5500',
    methods: ['PUT', 'DELETE']
}

export const cookieConfig = {
    key: 'frase secreta o palabra'
}
import jwt from 'jsonwebtoken'

const jwtkey = 'una clave'
const prefix = 'Bearer'

export const createToken = (user) =>
    prefix + jwt.sign(user, jwtkey, { expiresIn: 120 })


export const verifyToken = (token) => {
    const clearToken = token.split(prefix)[1]
    return jwt.verify(clearToken, jwtkey)
}